module.exports = (theme) => {
    return {
        '.btn': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: theme('colors.primary.500'),
            transition: 'all .2s ease-in-out',

            // default btn
            '&': {
                padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
                fontSize: theme('fontSize.label'),
                fontWeight: theme('fontWeight.medium'),
                letterSpacing: '0.002em',
                lineHeight: theme('spacing.6'),
                borderRadius: `${theme('spacing[1.5]')}`,
                '&:hover': {
                    backgroundColor: theme('colors.primary.600'),
                },
                '&:disabled': {
                    backgroundColor: theme('colors.primary.100'),
                },
                '&:active': {
                    backgroundColor: theme('colors.primary.600'),
                }
            },

            // btn variants
            '&-outline': {
                backgroundColor: 'transparent',
                border: `solid ${theme('spacing[0.5]')} ${theme('colors.primary.500')}`,
                color: theme('colors.primary.500'),
                '&:hover': {
                    backgroundColor: theme('colors.primary.50'),
                },
                '&:disabled': {
                    backgroundColor: 'transparent',
                    color: theme('colors.primary.100'),
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.primary.100')}`,
                },
                '&:active': {
                    backgroundColor: theme('colors.primary.50'),
                }
            },

            '&-min': {
                backgroundColor: 'transparent',
                color: theme('colors.primary.500'),
                '&:hover': {
                    backgroundColor: theme('colors.primary.50'),
                },
                '&:active': {
                    backgroundColor: theme('colors.primary.50'),
                },
                '&:disabled': {
                    backgroundColor: 'transparent',
                    color: theme('colors.primary.100'),
                    border: 'none',
                },
            },

            // btn sizes
            '&-sm': {
                padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
                fontSize: theme('fontSize.label-sm'),
                letterSpacing: '0.005em',
                lineHeight: theme('spacing.5'),
                borderRadius: `${theme('spacing.1')}`,


            },

            '&-md': {
                padding: `${theme('spacing[2.5]')} ${theme('spacing.4+2')}`,
                fontSize: theme('fontSize.label-sm'),
                letterSpacing: '0.005em',
                lineHeight: theme('spacing.5'),
                borderRadius: `${theme('spacing.1')}`,


            },
            '&-lg': {
                padding: `${theme('spacing.4')} ${theme('spacing.6')}`,
                fontSize: theme('fontSize.label-xl'),
                lineHeight: theme('spacing.7'),
            },

            // btn states
            '&:focus': {
                outline: 'solid',
                outlineWidth: theme('spacing.1'),
                outlineColor: theme('colors.primary.300'),
            },
            '&:disabled': {
                color: 'rgba(255, 255, 255, 0.4)',
            },
            '&:active': {
                outline: 'solid',
                outlineWidth: theme('spacing.1'),
                outlineColor: theme('colors.primary.700'),
            }
        }
    }
}