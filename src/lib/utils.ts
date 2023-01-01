export function getWikipediaMobileUrl(url: string): string {
  return !url ? "" : url.replace("wikipedia.org", "m.wikipedia.org");
}

export function checkYear(year: string) {
  const currentYear = new Date().getFullYear();

  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear);
  }

  return year;
}

export function roundCheck(round: number) {
  if (round >= 100) {
    return 1;
  }

  return round;
}

export function paginationParams(page: number, size: number) {
  const offset = (page - 1) * size;
  const limit = size;

  return `limit=${limit}&offset=${offset}`;
}