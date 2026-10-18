/** Strings starting with "TODO" are placeholders awaiting real copy. */
export const isTodo = (s: string | undefined | null): boolean => !!s && /^TODO\b/.test(s);
