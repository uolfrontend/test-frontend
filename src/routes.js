import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Atualizar from './pages/Atualizar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/atualizar/:id" exact component={Atualizar} />
      </Switch>
    </BrowserRouter>
  );
}
