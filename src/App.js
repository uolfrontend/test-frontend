import './App.css';
import './css/reset.css';
import './css/style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Components/Header/Header';
import ListagemDeUsuarios from './Components/ListagemUsuarios/ListagemDeUsuarios';
import CadastrarUsuarios from './Components/CadastrarUsuarios/CadastrarUsuarios';
import EditarUsuarios from './Components/EditarUsuarios/EditarUsuarios';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={ListagemDeUsuarios} />
          <Route path="/cadastro" component={CadastrarUsuarios} />
          <Route path="/editar/:id" component={EditarUsuarios} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
