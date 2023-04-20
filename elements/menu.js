module.exports = (theme) => {
  return {
    'ul.menu': {
      listStyle: 'none',
      display: 'flex',
      gap: theme('spacing.2'),
      alignItems: 'center',
      justifyContent: 'flex-start',
      '&-vertical': {
        flexDirection: 'column',
      },

      '& li': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme('spacing.2'),
        padding: `${theme('spacing.2')} ${theme('spacing[2.5]')}`,
        cursor: 'pointer',
        position: 'relative',
        fontSize: theme('fontSize.label'),
        color: theme('colors.gray.600'),
        borderRadius: theme('spacing.1'),
        '&:focus': {
          color: theme('colors.gray.800'),
        },
        '&focus-visible': {
          color: theme('colors.gray.800'),
        },
        '&:disabled': {
          color: theme('colors.gray.200'),
          PointerEvents: 'none',
        },
        '& .icon, svg': {
          width: theme('spacing.4'),
          height: theme('spacing.4'),
        },
        '& a': {
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.1'),
          cursor: 'pointer',
          '& .icon, svg': {
            width: theme('spacing.4'),
            height: theme('spacing.4'),
          },
          '&:disabled': {
            PointerEvents: 'none',
          },
        },
      },

      '& li.active': {
        color: theme('colors.gray.900'),
        fontWeight: theme('fontWeight.semibold'),
      },

      '&-contained': {
        '& li.active': {
          color: '#fff',
          fontWeight: theme('fontWeight.semibold'),
          background: '#000',
        },
        '&-rounded': {
          '& li': {
            borderRadius: '9999px',
            padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          },
          '& li.active': {
            color: '#fff',
            fontWeight: theme('fontWeight.semibold'),
            background: '#000',
          },
        },
      },
    },
  };
};
