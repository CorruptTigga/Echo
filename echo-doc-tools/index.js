const fs = require('fs-extra');
const path = require('path');
const MarkdownIt = require('markdown-it');
const slugify = require('slugify');

const md = new MarkdownIt();
const docsDir = path.resolve(__dirname, '../docs'); // Folder with markdown files
const outputFile = path.resolve(__dirname, 'doc-index.json');

function generateId(text, prefix = '') {
  return prefix + slugify(text, { lower: true, strict: true });
}

async function parseMarkdownFile(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  const tokens = md.parse(content, {});

  const sections = [];
  let currentSection = null;
  let currentContent = [];

  function pushCurrentSection() {
    if (currentSection) {
      currentSection.content = currentContent.join('\n').trim();
      sections.push(currentSection);
    }
  }

  tokens.forEach((token, i) => {
    if (token.type === 'heading_open' && ['h1', 'h2', 'h3'].includes(token.tag)) {
      // If we already have a section, save it before starting new
      pushCurrentSection();

      const headingTextToken = tokens[i + 1];
      const headingText = headingTextToken.content;
      const level = parseInt(token.tag[1], 10);

      const id = generateId(headingText);

      currentSection = {
        id,
        title: headingText,
        level,
        content: '',
      };
      currentContent = [];
    } else if (currentSection && token.type !== 'heading_close') {
      // accumulate all tokens until next heading
      if (token.type === 'inline') {
        currentContent.push(token.content);
      } else if (token.type === 'fence') {
        currentContent.push('```' + token.info + '\n' + token.content + '```');
      } else if (token.type === 'paragraph_open' || token.type === 'paragraph_close') {
        // ignore
      } else {
        // other token types could be handled if needed
      }
    }
  });

  // push last section
  pushCurrentSection();

  return sections;
}

async function buildIndex() {
  const files = await fs.readdir(docsDir);
  const markdownFiles = files.filter(f => f.endsWith('.md'));

  const index = [];

  for (const file of markdownFiles) {
    const fullPath = path.join(docsDir, file);
    const pageId = path.basename(file, '.md');

    const sections = await parseMarkdownFile(fullPath);

    index.push({
      id: pageId,
      title: sections.length > 0 ? sections[0].title : pageId,
      url: `${pageId}.md`, // or whatever URL scheme
      sections: sections.map(({ id, title, content, level }) => ({
        id,
        title,
        content,
        level,
        url: `${pageId}.md#${id}`,
      })),
    });
  }

  await fs.writeJson(outputFile, index, { spaces: 2 });
  console.log(`Index written to ${outputFile}`);
}

buildIndex().catch(console.error);
