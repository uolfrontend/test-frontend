import './App.css'
import UsersList from './components/ViewUser/UsersList'
import { UsersProvider } from './context/UsersContext'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <UsersProvider>
      <div className="container-x1">
        <div className="table-responsive">
          <div className="table-wrapper">
            <UsersList />
          </div>
        </div>
      </div>
      <div>
        <></>
      </div>
    </UsersProvider>
  )
}

export default App
