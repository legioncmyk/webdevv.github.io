export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0f0f0f',
        accent: '#ff2e2e',
        panel: '#1c1c1c'
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        display: ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 46, 46, 0.35)',
        glass: '0 10px 40px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(255,46,46,0.2), transparent 28%), linear-gradient(135deg, rgba(255,46,46,0.08), transparent 45%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(255,46,46,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(255,46,46,0.45)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
