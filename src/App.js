// routes
import Router from './routes';
// theme
import ThemeProvider from './common/theme';
// components
import ScrollToTop from './common/ScrollToTop';
import { BaseOptionChartStyle } from './common/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
