module.exports = (theme) => {
  const scale = (font, weight) => {
    return {
      fontSize: theme(`fontSize.${font}`),
      fontWeight: theme(`fontWeight.${weight}`),
    };
  };
  const states = {
    '&:hover': {
      color: theme('colors.primary.600'),
    },
    '&:focus': {
      color: theme('colors.primary.600'),
    },
    '&focus-visible': {
      color: theme('colors.primary.600'),
    },
    '&:disabled': {
      color: theme('colors.primary.200'),
      PointerEvents: 'none',
    },
    '&:active': {
      color: theme('colors.primary.800'),
    },
  };
  const baseLink = {
    color: theme('colors.primary.500'),
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.1'),
    cursor: 'pointer',
    position: 'relative',
    ...scale('body', 'medium'),
    ...states,
  };
  const baseIcon = (w, h) => {
    return { width: theme(`spacing.${w}`), height: theme(`spacing.${h}`) };
  };
  const fancyLink = {
    content: '""',
    display: 'block',
    width: '100%',
    height: '2px',
    background: theme('colors.primary.500'),
    transition: 'transform 250ms ease-in-out',
    position: 'absolute',
    bottom: '0',
  };

  return {
    'a.link': {
      ...baseLink,
      '& .icon, svg ': {
        ...baseIcon(4, 4),
      },
      //create me an underline for the link using after
      '&-fancy::after': {
        ...fancyLink,
      },
      '&-fancy-hover::after': {
        ...fancyLink,
        transform: 'scaleX(0)',
      },
      '&-fancy-hover:hover::after': {
        transform: 'scaleX(1)',
      },
      '&-fancy-hover:active::after': {
        transform: 'scaleX(1)',
      },
      '&-sm': {
        ...scale('body-sm', 'medium'),
      },
      '&-xs': {
        ...scale('body-xs', 'medium'),
      },
      '&-lg': {
        ...scale('body-lg', 'medium'),
      },
      '&-xl': {
        ...scale('body-xl', 'medium'),
      },
    },
  };
};
