import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Container, createTheme, Stack, ThemeProvider } from '@mui/material';
import { CardList } from './components/Cards/CardList';
import { CustomSlider } from './components/CustomSlider/CustomSlider';
import { AppSliderProvider } from './context/sliderContextProvider';
import { NEW_THEME } from './constants';


function App() {

  const theme = createTheme(NEW_THEME);

  return (
    <ThemeProvider theme={theme}>
      <AppSliderProvider>
        <CssBaseline />

        <Container maxWidth="xs" sx={{ marginTop: 4 }}>
          <CustomSlider />

          <Stack spacing={2} alignItems="center" marginTop={4} direction='row'>
            <CardList />
          </Stack>
        </Container >
      </AppSliderProvider>
    </ThemeProvider>
  )
}


export default App
