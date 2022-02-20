import AppContextProvider from './contexts/AppContext';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;
