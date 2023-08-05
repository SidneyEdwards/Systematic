import { createTheme } from '@mui/material/styles';
import { colors } from './theme';

const button = createTheme({
components: {
    MuiButton: {
    styleOverrides: {
        root: {
        backgroundColor: colors.primary,
        color: colors.white,
        boxShadow: colors.shadow,
        borderRadius: "15px",
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '17px',
        '&:hover': {
            backgroundColor: colors.white,
            color: colors.primary,
        },
        '@media (max-width:984px)': {
            fontSize: '12px', 
            padding: '6px 12px', 
        },
        '@media (max-width:770px)': {
            fontSize: '11px', 
            padding: '4px 10px', 
        },
        },
    },
    },
},
});

export default button;