export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest:  '#111235', // Deep footer bg
          dark:     '#1A1C4F', // Hover states
          DEFAULT:  '#222569', // Main brand (Dark Blue) - good for text/buttons
          light:    '#4EDFD2', // Accent (Cyan) - good for highlights on dark bg
          lighter:  '#F3F4F6', // Neutral gray (instead of cyan tint)
          lightest: '#FFFFFF', // Pure white (instead of cyan tint)
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 3px 0 rgba(34,37,105,0.08), 0 1px 2px -1px rgba(34,37,105,0.08)',
        'card-hover': '0 4px 16px 0 rgba(34,37,105,0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #222569 0%, #111235 100%)',
      },
    },
  },
}
