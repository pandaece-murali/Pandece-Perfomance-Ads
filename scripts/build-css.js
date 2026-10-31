const fs = require('fs');
const path = require('path');
const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');

async function buildCSS() {
  const rootDir = process.cwd();
  const sourceCssPath = path.join(rootDir, 'app', 'globals.source.css');
  const targetCssPath = path.join(rootDir, 'app', 'globals.css');

  const sourceCss = fs.readFileSync(sourceCssPath, 'utf8');

  const compiler = await compile(sourceCss, {
    base: rootDir,
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [
      {
        base: rootDir,
        pattern: '{app,components}/**/*.{tsx,ts,jsx,js,html}',
        negated: false,
      },
    ],
  });

  const candidates = scanner.scan();
  const compiledCss = compiler.build(candidates);

  fs.writeFileSync(targetCssPath, compiledCss, 'utf8');
  console.log(`[CSS Builder] Successfully compiled ${compiledCss.length} bytes of CSS to ${targetCssPath}`);
}

buildCSS().catch((err) => {
  console.error('[CSS Builder] Error:', err);
  process.exit(1);
});

