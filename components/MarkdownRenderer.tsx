import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

// WARNING: This is a simplified and UNSAFE markdown to HTML converter.
// In a real-world application, you MUST use a proper library like 'marked' or 'react-markdown'
// and a sanitizer like 'DOMPurify' to prevent XSS attacks.
// This is for demonstration purposes only in a controlled environment where the AI output is trusted.
const simpleMarkdownToHtml = (markdown: string) => {
  let html = markdown
    .split('\n\n') // Split by paragraphs
    .map(paragraph => {
      // Trim paragraph
      paragraph = paragraph.trim();

      // Headings
      if (paragraph.startsWith('### ')) return `<h3>${paragraph.substring(4)}</h3>`;
      if (paragraph.startsWith('## ')) return `<h2>${paragraph.substring(3)}</h2>`;
      if (paragraph.startsWith('# ')) return `<h1>${paragraph.substring(2)}</h1>`;
      
      // Unordered list
      if (paragraph.match(/^(\s*(\*|-)\s.*)+$/s)) {
          const listItems = paragraph.split('\n').map(item => `<li>${item.replace(/^\s*(\*|-)\s/, '')}</li>`).join('');
          return `<ul>${listItems}</ul>`;
      }
      
      // Convert line breaks within a paragraph to <br>
      paragraph = paragraph.replace(/\n/g, '<br />');

      // Bold and Italic (simple regex)
      let p = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');

      if (!p) return '';
      return `<p>${p}</p>`;
    })
    .join('');
  return html;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const htmlContent = simpleMarkdownToHtml(content);

  return (
    <div
      className="prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
