// Color palette constants for Lunar Labs
export const colors = {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  secondary: {
    50: '#f6f7f5',
    100: '#e9ede7',
    200: '#d3dbc9',
    300: '#b3c2a4',
    400: '#8fa27a',
    500: '#69995d',
    600: '#527948',
    700: '#43603b',
    800: '#394d32',
    900: '#32402c',
  },
  highlight: {
    DEFAULT: '#f1dac4',
    light: '#f5ede1',
    dark: '#e8c4a1',
  },
  dark: {
    charcoal: '#24292e',
    'near-black': '#0a0a0a',
  },
  neutral: {
    light: '#f1f1f1',
    muted: '#a1a1aa',
    border: '#27272a',
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
  },
} as const

export type ColorKeys = keyof typeof colors
