// Copy to clipboard
const copyToClipboard = (text) =>
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

copyToClipboard("Hello copy to clipboard");
