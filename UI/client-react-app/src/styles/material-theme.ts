import { createMuiTheme } from '@material-ui/core';
import { palette } from './palette';
import { typography } from './typography';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: palette.blue.main,
    },
    error: {
      main: palette.red.main
    },
    text: {
      primary: palette.winterGrey.primary
    }
  },
  spacing: 4,
  typography: (typography as any),
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      },
      root: {
        height: 40
      }
    },
    MuiTab: {
      root: {
        textTransform: 'initial'
      },
      wrapper: {
        alignItems: 'normal'
      }
    },
    MuiTabs: {
      root: {
        borderBottom: `2px solid ${palette.winterGrey.light}`
      },
      indicator: {
        top: 0,
        height: 4
      }
    },
    MuiTableCell: {
      // should be similar to body2
      head: {
        fontSize: '0.875rem',
        lineHeight: '1.3571em',
        fontWeight: 500,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        color: palette.winterGrey.primary,
        backgroundColor: `${palette.autumnGrey.light} !important`
      },
      root: {
        padding: '4px 24px'
      }
    },
    MuiTableRow: {
      root: {
        borderTop: `1px solid ${palette.autumnGrey.medium_2}`,
        '&$selected': {
          backgroundColor: 'white'
        },
        '&:hover': {
          backgroundColor: palette.autumnGrey.ultraLight
        },
        height: 48
      },
      head: {
        '&:hover': {
          backgroundColor: palette.autumnGrey.light
        },
        height: 56
      }
    },
    MuiTableHead: {
      root: {
        borderTop: `1px solid ${palette.autumnGrey.medium_2}`,
        backgroundColor: palette.autumnGrey.light,
      }
    },
    MuiChip: {
      root: {
        backgroundColor: palette.winterGrey.light,
        color: palette.winterGrey.primary
      },
      deletable: {
        '&:focus': {
          backgroundColor: palette.winterGrey.light,
          color: palette.winterGrey.primary
        }
      }
    },
    MuiInputBase: {
      root: {
        boxSizing: 'unset',
        border: `1px solid ${palette.winterGrey.medium}`,
        borderRadius: 2,
        color: palette.winterGrey.primary,
        height: 40,
        cursor: 'default',
        ...typography.body1,
        '&$error': {
          border: `1px solid ${palette.red.main}`,
          '&>input': {
            '&::placeholder': {
              color: palette.red.main
            }
          }
        }
      },
      input: {
        padding: '0 8px',
        '&::placeholder': {
          color: palette.winterGrey.supporting_2,
          ...typography.caption,
          opacity: 1
        },
        ...typography.body1
      },
      inputMultiline: {
        '&::placeholder': {
          color: palette.winterGrey.supporting_2,
          ...typography.caption,
          lineHeight: '18px',
          opacity: 1,
        },
      },
      fullWidth: {
        width: 'calc(100% - 10px)'
      },
      multiline: {
        padding: '6.5px 8px',
        height: 'auto'
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0, 1.5px) scale(1)'
      }
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: palette.winterGrey.primary,
        },
        marginBottom: 4,
        ...typography.caption
      },
      asterisk: {
        '&$error': {
          color: palette.winterGrey.primary,
        },
      }
    },
    MuiFormHelperText: {
      root: {
        '&$error': {
          color: palette.red.main,
          marginTop: 30,
          marginLeft: 0,
        },
        position: 'absolute',
        top: 'calc(100% - 24px)',
        marginTop: 2,
        ...typography.caption
      }
    },
    MuiInput: {
      formControl: {
        marginBottom: 24,
        'label + &': {
          marginTop: 18
        }
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginBottom: 20
      }
    },
    MuiSelect: {
      root: {
        height: 30,
        backgroundColor: palette.winterGrey.light,
      },
      select: {
        paddingRight: 8,
        '&:focus': {
          backgroundColor: palette.winterGrey.light
        }
      },
      selectMenu: {
        width: 'calc(100% - 16px)',
        height: '100%',
        lineHeight: '30px',
        paddingRight: 28
      },
      icon: {
        paddingRight: 4
      }
    },
    MuiSwitch: {
      switchBase: {
        height: 'auto'
      }
    },
    MuiTablePagination: {
      input: {
        margin: '0 4px'
      },
      select: {
        textAlign: 'left',
        textAlignLast: 'left'

      },
      selectRoot: {
        marginLeft: 0,
        marginRight: 0,
        width: 100
      }
    },
    MuiTypography: {
      root: {
        display: 'block',
        color: palette.winterGrey.primary
      }
    },
    MuiListSubheader: {
      root: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: palette.winterGrey.supporting_2,
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: palette.autumnGrey.light
      },
      barColorPrimary: {
        backgroundColor: palette.customColors.darkRed
      }
    }
  }
};

export const theme = createMuiTheme(themeOptions);