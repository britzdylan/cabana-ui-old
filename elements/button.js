module.exports = (theme) => {
    return {
        '.btn': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: theme('colors.primary.500'),
            transition: 'all .2s ease-in-out',
            gap: theme('spacing.2'),

            '& > span.icon': {
                fontSize: theme('spacing.5'),
            },

            // Default states
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
            },

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
                    color: theme('colors.primary.200'),
                    border: 'none',
                },
            },

            '&-text': {
                backgroundColor: 'transparent',
                color: theme('colors.primary.500'),
                border: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme('colors.primary.600'),
                },
                '&:active': {
                    backgroundColor: 'transparent',
                    outlineWidth: '0px',
                    color: theme('colors.primary.700'),
                },
                '&:focus': {
                    outlineWidth: '0px',
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
                '& > span.icon': {
                    fontSize: theme('spacing[3.5]'),
                }
            },

            '&-md': {
                padding: `${theme('spacing[2.5]')} ${theme('spacing.4+2')}`,
                fontSize: theme('fontSize.label-sm'),
                letterSpacing: '0.005em',
                lineHeight: theme('spacing.5'),
                borderRadius: `${theme('spacing.1')}`,
                '& > span.icon': {
                    fontSize: theme('spacing.4'),
                }

            },
            '&-lg': {
                padding: `${theme('spacing.4')} ${theme('spacing.6')}`,
                fontSize: theme('fontSize.label-xl'),
                lineHeight: theme('spacing.7'),
                '& > span.icon': {
                    fontSize: theme('spacing.7'),
                }
            },


            // brands
            '&-facebook': {
                color: '#fff',
                backgroundColor: '#1877F2',
                '&:hover': {
                    backgroundColor: '#1B66C8',
                    outlineWidth: '0px',
                },
                '&:active': {
                    // backgroundColor: theme('colors.brand.facebook'),
                    outlineWidth: '0px',
                },
                '&:focus': {
                    outlineWidth: '3px',
                    outlineColor: '#88B9F9',
                },
                '&-alt': {
                    color: theme('colors.neutral.800'),
                    backgroundColor: '#fff',
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.300')}`,
                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:active': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:focus': {
                        outlineWidth: '0px',
                    },
                },
            },

            '&-twitter': {
                color: '#fff',
                backgroundColor: '#1DA1F2',
                '&:hover': {
                    backgroundColor: '#108DDA',
                    outlineWidth: '0px',
                },
                '&:active': {
                    // backgroundColor: theme('colors.brand.facebook'),
                    outlineWidth: '0px',
                },
                '&:focus': {
                    backgroundColor: '#108DDA',
                    outlineWidth: '3px',
                    outlineColor: '#8CD2FD',
                },
                '&-alt': {
                    color: theme('colors.neutral.800'),
                    backgroundColor: '#fff',
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.300')}`,
                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:active': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:focus': {
                        outlineWidth: '0px',
                    },
                },
            },

            '&-google': {
                color: theme('colors.neutral.800'),
                backgroundColor: '#fff',
                border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.300')}`,
                '&:hover': {
                    backgroundColor: theme('colors.gray.50'),
                    outlineWidth: '0px',
                },
                '&:active': {
                    backgroundColor: theme('colors.gray.50'),
                    outlineWidth: '0px',
                },
                '&:focus': {
                    outlineWidth: '0px',
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.200')}`,
                },
                '&-alt': {
                    color: theme('colors.neutral.800'),
                    backgroundColor: '#fff',
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.300')}`,
                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:active': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:focus': {
                        outlineWidth: '0px',
                    },
                },
            },

            '&-apple': {
                color: '#fff',
                backgroundColor: '#000',
                '&:hover': {
                    backgroundColor: theme('colors.neutral.800'),
                    outlineWidth: '0px',
                },
                '&:active': {
                    outlineWidth: '0px',
                },
                '&:focus': {
                    outlineWidth: '3px',
                    outlineColor: theme('colors.gray.300'),
                },
                '&-alt': {
                    color: theme('colors.neutral.800'),
                    backgroundColor: '#fff',
                    border: `solid ${theme('spacing[0.5]')} ${theme('colors.gray.300')}`,
                    '&:hover': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:active': {
                        backgroundColor: theme('colors.gray.50'),
                        outlineWidth: '0px',
                    },
                    '&:focus': {
                        outlineWidth: '0px',
                    },
                },
            },
        }
    }
}