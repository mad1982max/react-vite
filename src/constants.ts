export const NEW_THEME = {
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#1bc015',
                    },
                },
            },
        },
    },
};