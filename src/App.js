import './styles/app.scss'

import { Header } from './components/Header';
import { ClientList } from './components/ClientList';
import { Nav } from './components/Nav';
import { FormEdit } from './components/FormEdit';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      {/* <ClientList /> */}
      <FormEdit />
    </div>
  );
}

export default App;
