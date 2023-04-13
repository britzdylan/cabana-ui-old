


module.exports = (theme) => {
    const btnLayout = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: theme('colors.primary.500'),
        transition: 'all .2s ease-in-out',
    }
    const base = {
        ...btnLayout,
        gap: theme('spacing.2'),

        // icon size
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
    }

    const defaultBtn = {
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
    }

    const outlineBtn = {
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
    }

    const minBtn = {
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
    }

    const textBtn = {
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
    }

    const smBtn = {
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        borderRadius: `${theme('spacing.1')}`,
        '& > span.icon': {
            fontSize: theme('spacing[3.5]'),
        }
    }

    const mdBtn = {
        padding: `${theme('spacing[2.5]')} ${theme('spacing.4+2')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        borderRadius: `${theme('spacing.1')}`,
        '& > span.icon': {
            fontSize: theme('spacing.4'),
        }
    }

    const lgbBtn = {
        padding: `${theme('spacing.4')} ${theme('spacing.6')}`,
        fontSize: theme('fontSize.label-xl'),
        lineHeight: theme('spacing.7'),
        '& > span.icon': {
            fontSize: theme('spacing.7'),
        }
    }

    const brandAlt = {
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
    }

    const facebook = {
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
            ...brandAlt,
            '& > span.icon': {
                color: '#1877F2',
            },
        }
    }

    const twitter = {
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
            ...brandAlt,
            '& > span.icon': {
                color: '#1DA1F2',
            },
        }
    }

    const google = {
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
            ...brandAlt,
            '& > span.icon': {
                color: 'currentColor',
            },
        }
    }

    const apple = {
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
            ...brandAlt,
            '& > span.icon': {
                color: '#000',
            },
        }
    }

    const smallFab = {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
        borderRadius: theme('spacing.1'),
        '& > svg': {
            fontSize: theme('spacing.3'),
            width: theme('spacing.5'),
            height: theme('spacing.5'),
            color: '#fff'
        }
    }

    const mediumFab = {
        width: theme('spacing.10'),
        height: theme('spacing.10'),
        borderRadius: theme('spacing.1'),
        '& > svg': {
            fontSize: theme('spacing.4'),
            width: theme('spacing.6'),
            height: theme('spacing.6'),
            color: '#fff'
        }
    }

    const largeFab = {
        width: theme('spacing.12'),
        height: theme('spacing.12'),
        borderRadius: theme('spacing.2'),
        '& > svg': {
            fontSize: theme('spacing.5'),
            width: theme('spacing.7'),
            height: theme('spacing.7'),
            color: '#fff'
        }
    }

    const xlargeFab = {
        width: theme('spacing.14'),
        height: theme('spacing.14'),
        borderRadius: theme('spacing.2'),
        '& > svg': {
            fontSize: theme('spacing.6'),
            width: theme('spacing.8'),
            height: theme('spacing.8'),
            color: '#fff'
        }
    }

    const btnGroup = {
        display: 'flex',
        flexDirection: 'row',
        gap: 0,
        overflow: 'hidden',
        borderRadius: theme('spacing.2'),
        width: 'fit-content',
        height: 'fit-content',
    }


    return {
        '.btn': {
            ...base,

            // default btn
            '&': {
                ...defaultBtn
            },

            // btn variants
            '&-outline': {
                ...outlineBtn
            },

            '&-min': {
                ...minBtn
            },

            '&-text': {
                ...textBtn
            },

            // btn sizes
            '&-sm': {
                ...smBtn
            },

            '&-md': {
                ...mdBtn
            },

            '&-lg': {
                ...lgbBtn
            },


            // brands
            '&-facebook': {
                ...facebook
            },

            '&-twitter': {
                ...twitter
            },

            '&-google': {
                ...google,
            },

            '&-apple': {
                ...apple
            },
        },
        '.fab': {
            ...btnLayout,
            // padding: `${theme('spacing.2')} ${theme('spacing.3

            '&-sm': {
                ...smallFab
            },

            '&-md': {
                ...mediumFab
            },

            '&-lg': {
                ...largeFab
            },

            '&-xl': {
                ...xlargeFab
            },

            '&-rounded': {
                borderRadius: '100%',
            },
        },
        '.btn-group': {
            ...btnGroup,
            '& > button': {
                ...base,
                ...defaultBtn,
                borderRadius: '0px',
                '&:focus': {
                    outlineWidth: '0px',
                    outlineColor: 'transparent',
                },
                '&:active': {
                    outlineWidth: '0px',
                    outlineColor: 'transparent',
                },
            },
            '&-small': {
                '& > button': {
                    ...base,
                    ...defaultBtn,
                    ...smBtn,
                    borderRadius: '0px',
                    '&:focus': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                    '&:active': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                },
            },
            '&-large': {
                '& > button': {
                    ...base,
                    ...defaultBtn,
                    ...lgbBtn,
                    borderRadius: '0px',
                    '&:focus': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                    '&:active': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                },
            },

            '&-outline': {
                border: `solid ${theme('spacing[0.5]')} ${theme('colors.primary.500')}`,
                '& > button': {
                    ...base,
                    ...outlineBtn,
                    borderLeftWidth: '0px',
                    borderRightWidth: theme('spacing[0.5]'),
                    borderTopWidth: '0px',
                    borderBottomWidth: '0px',
                    borderRadius: '0px',
                    '&:last-child': {
                        borderRightWidth: '0px'
                    },
                    '&:focus': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                    '&:active': {
                        outlineWidth: '0px',
                        outlineColor: 'transparent',
                    },
                },
            }
        },
    }
}