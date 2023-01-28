import './App.css';
import { GlobalStyles } from './styles/GlobalStyles';
import Routes from './routes/Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faHome,fab);

function App() {
  return (
    <>
    <Routes />
    <GlobalStyles  />
    </>
  );
}

export default App;
