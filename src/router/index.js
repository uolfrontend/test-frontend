import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { makeTelaInicial } from '../factories/pages/tela-inicial'
import { makeTelaEdicao } from '../factories/pages/tela-edicao'

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={makeTelaInicial} />
        <Route path="/edit" component={makeTelaEdicao} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default RouterApp
