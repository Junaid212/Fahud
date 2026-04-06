import fs from 'fs';
import path from 'path';

// Simple parser to extract content and perform basic JSX replacements
const convertHtmlToJsx = (htmlContent) => {
    // Extract main page content
    let contentMatch = htmlContent.match(/<div class="page-content">([\s\S]*?)<!-- \w+ FOOTER START -->/i);
    if (!contentMatch) {
        contentMatch = htmlContent.match(/<div class="page-content">([\s\S]*?)<footer/i);
    }

    let content = contentMatch ? contentMatch[1] : htmlContent;

    // Remove the trailing parts before footer and closing page-content div
    content = content.replace(/<!-- \w*CONTENT END\s*-->[\s\S]*/, '');
    content = content.replace(/<\/div>\s*$/, ''); // remove the last </div> before footer if we grabbed it

    // Common JSX replacements
    content = content
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
        .replace(/<img(.*?)>/g, (match, g1) => {
            if (g1.trim().endsWith('/')) return match;
            return `<img${g1} />`;
        })
        .replace(/<input(.*?)>/g, (match, g1) => {
            if (g1.trim().endsWith('/')) return match;
            return `<input${g1} />`;
        })
        .replace(/<source(.*?)>/g, (match, g1) => {
            if (g1.trim().endsWith('/')) return match;
            return `<source${g1} />`;
        })
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        // Advanced: Inline styles
        .replace(/style="([^"]+)"/g, (match, g1) => {
            let styles = g1.split(';').filter(s => s.trim().length > 0);
            let styleObj = {};
            styles.forEach(s => {
                let parts = s.split(':');
                if (parts.length < 2) return;
                let key = parts[0].trim();
                let val = parts.slice(1).join(':').trim();
                // camelCase the key
                key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[key] = val;
            });
            // Handle url(...) for background images especially
            return `style={${JSON.stringify(styleObj)}}`;
        })
        .replace(/disabled="disabled"/g, 'disabled'); // Fix disabled attribute boolean

    // Fix InnerBanner static HTML to use our InnerBanner component
    content = content.replace(
        /{?\/\*\s*INNER PAGE BANNER\s*\*\/}?}?[\s\S]*?{?\/\*\s*INNER PAGE BANNER END\s*\*\/}?}?/g,
        ''
    );

    return content;
};

const run = () => {
    const rawPagesDir = path.join(process.cwd(), 'raw_pages');
    const files = fs.readdirSync(rawPagesDir).filter(f => f.endsWith('.html'));

    for (const file of files) {
        const filePath = path.join(rawPagesDir, file);
        const html = fs.readFileSync(filePath, 'utf-8');

        const jsxBody = convertHtmlToJsx(html);

        let titleMatch = html.match(/<title>Fahud Template \| (.*?)<\/title>/);
        let title = "Page Title";
        if (titleMatch) title = titleMatch[1];

        const pageName = file.replace('.html', '');
        const routeName = pageName;

        let targetDir = path.join(process.cwd(), 'src', 'app', routeName);
        if (routeName === 'index') {
            continue; // Skip main index since we already built it
        }

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const componentName = routeName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

        const finalJsx = `import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function ${componentName}() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="${title}" />
          ${jsxBody}
        </div>
        
        <Footer />
      </div>
    </>
  );
}`;

        fs.writeFileSync(path.join(targetDir, 'page.js'), finalJsx);
        console.log(`Generated route /${routeName}`);
    }
}

run();
