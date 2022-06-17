import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import CustomerList from '../pages/customer-list';
import CustomerView from '../pages/customer-view';

export function AppRoutes() {
  return (
      <Router>
          <Routes>
              <Route path="" element={<CustomerList />}/>
              <Route path="/customer-view/:id" element={<CustomerView />}/>
          </Routes>
      </Router>
  )
}
