import { AppProvider } from './Context/AppContext';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
};

export default App;