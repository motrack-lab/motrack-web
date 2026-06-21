export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest:  '#1A3A6B',
          dark:     '#2C5EAD',
          DEFAULT:  '#1591DC',
          light:    '#4BB8FA',
          lighter:  '#C4E2F5',
          lightest: '#EBF5FD',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 3px 0 rgba(21,145,220,0.08), 0 1px 2px -1px rgba(21,145,220,0.08)',
        'card-hover': '0 4px 16px 0 rgba(21,145,220,0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2C5EAD 0%, #1591DC 100%)',
      },
    },
  },
}
