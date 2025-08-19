// UI Pattern utilities for consistent styling across components

// Button patterns
export const buttonPatterns = {
  primary: "inline-flex items-center justify-center rounded-2xl bg-brand-500 px-5 py-3 text-white font-medium shadow-lift hover:brightness-110 transition-all duration-200",
  secondary: "inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50 transition-all duration-200",
  outline: "inline-flex items-center justify-center rounded-2xl border-2 border-brand-500 px-5 py-3 text-brand-600 font-medium hover:bg-brand-50 transition-all duration-200",
  ghost: "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium hover:bg-slate-100 transition-all duration-200",
};

// Card patterns
export const cardPatterns = {
  base: "rounded-2xl border bg-white/90 shadow-soft",
  elevated: "rounded-2xl border bg-white shadow-lift",
  subtle: "rounded-2xl border bg-slate-50/50",
  interactive: "rounded-2xl border bg-white/90 shadow-soft hover:shadow-lift transition-all duration-200",
};

// Form input patterns
export const inputPatterns = {
  base: "w-full h-12 rounded-2xl border px-4 outline-none transition-all duration-200",
  focus: "focus:ring-4 focus:ring-brand-100 focus:border-brand-400",
  error: "border-red-300 focus:ring-red-100 focus:border-red-400",
  success: "border-green-300 focus:ring-green-100 focus:border-green-400",
};

// Label patterns
export const labelPatterns = {
  base: "block text-sm font-medium text-ink-700 mb-2",
  required: "block text-sm font-medium text-ink-700 mb-2 after:content-['*'] after:ml-1 after:text-red-500",
  helper: "text-xs text-ink-300 mt-1",
  error: "text-xs text-red-500 mt-1",
};

// Container patterns
export const containerPatterns = {
  section: "max-w-wrap mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",
  wide: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
};

// Spacing patterns
export const spacingPatterns = {
  section: "py-16 md:py-20",
  sectionSmall: "py-12 md:py-16",
  sectionLarge: "py-20 md:py-24",
};
