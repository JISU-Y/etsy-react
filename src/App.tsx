import AppContextProvider from './contexts/AppContext';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    // Refactor: 다른 Context들도 추가될수있으니 AppProvider로 묶어서 그 안에서 CartContextProvider를 넣어주는 형태로 리팩토링
    <AppContextProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;
