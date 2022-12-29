export function getWikipediaMobileUrl(url: string): string {
  return !url ? "" : url.replace('wikipedia.org', 'm.wikipedia.org');
}