import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
  <>
  <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path ='/register' element={<Register />}></Route>


        <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>


            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>
        
      </Routes>
    </div>
  </Router>
  <ToastContainer />
  </>
    </div>
  );
}

export default App;
