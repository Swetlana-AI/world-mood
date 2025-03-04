import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Grid } from '@mui/material';
import { theme } from './theme';
import Header from './components/Header';
import WorldMoodMap from './components/WorldMoodMap';
import TrendAnalysis from './components/TrendAnalysis';
import SentimentOverview from './components/SentimentOverview';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <WorldMoodMap />
            </Grid>
            <Grid item xs={12} md={4}>
              <SentimentOverview />
            </Grid>
            <Grid item xs={12}>
              <TrendAnalysis />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
