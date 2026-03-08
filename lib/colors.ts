// Lunar Labs 2.1 - Cloud Dancer & Tech Purple
export const colors = {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6', // Tech Purple
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  cloud: {
    dancer: '#f0eee9', // PANTONE 11-4201
    muted: '#d1d5db',
  },
  github: {
    black: '#010409',
    gray: '#0d1117',
    border: '#30363d',
  },
  neutral: {
    light: '#f1f1f1',
    muted: '#94a3b8',
  },
  semantic: {
    success: '#238636', // GitHub Green
    error: '#da3633',
    warning: '#d29922',
  },
} as const

export type ColorKeys = keyof typeof colors
