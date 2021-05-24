module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html',
                './src/**/*.vue',
                './src/**/*.jsx',
                './**/*.html',
                './**/*.twig',
                './*.html']
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                screen34: '75vh',
            },
            keyframes: {

                heartbeat: {

                    '0%, 100%': {
                        transform: 'scale(1)',
                        'transform-origin': 'center center',
                        'animation-timing-function': 'ease-out'
                    },
                    '10%': {
                        transform: 'scale(0.91)',
                        'animation-timing-function': 'ease-in'
                    },
                    '17%': {
                        transform: 'scale(0.98)',
                        'animation-timing-function': 'ease-out'
                    },
                    '33%': {
                        transform: 'scale(0.87)',
                        'animation-timing-function': 'ease-in'
                    },
                    '45%': {
                        transform: 'scale(1)',
                        'animation-timing-function': 'ease-out'
                    }
                }
            },
            animation: {
                heartbeat: 'heartbeat 2.5s ease-in-out infinite both',
            },
            spacing: {
                128: '32rem',
            },
        },
    
        fontFamily: {
            display: ['Tenor Sans', 'Georgia', 'serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
            sans: ['Noto Sans','Open Sans', 'Oswald', 'Ubuntu', 'ui-sans-serif', 'system-ui'],
            serif: ['Noto Serif','Georgia', 'Cambria', "Times New Roman", 'Times', 'ui-serif'],
        }
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
  }