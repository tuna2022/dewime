// Minimal markdown-to-plain-text for use in JSON-LD, meta descriptions, etc.
// where structured data expects prose, not markup.
export function stripMarkdown(source: string): string {
  return source
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/\n+/g, " ")
    .trim();
}
