export const GUIDE_CATEGORIES = {
  'ascend': { label: '昇腾AI芯片与算子开发', icon: '🧠', order: 1 },
} as const;

export type CategorySlug = keyof typeof GUIDE_CATEGORIES;
