type Dict = Record<string, any>;

export function t(dict: Dict, path: string, fallback = ''): any {
  return path.split('.').reduce<any>((acc, k) => (acc && k in acc ? acc[k] : undefined), dict) ?? fallback;
}

// merge en fallback into current locale (shallow)
export function withFallback(current: Dict, en: Dict): Dict {
  return { ...en, ...current }; // if you need deep-merge, we can expand later
}
