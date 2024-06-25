import ReactDOM from 'react-dom/client'
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// css
import './assets/scss/index.scss'
// Redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
// Router dom
import { createBrowserHistory } from 'history'
export const navigateHistory = createBrowserHistory();
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
// Import Page
import HeaderHome from './layout/HeaderHome'
import Home from './page/Home'
import Search from './page/Search'
import Register from './page/Register'
import Login from './page/Login'
import UserInfor from './page/UserInfor'
import Cart from './page/Cart'
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import Register from './page/Register'
import Profile from './page/Profile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HistoryRouter history={navigateHistory}>
      <Routes>
        <Route path='' element={<HeaderHome></HeaderHome>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='userInfor' element={<UserInfor></UserInfor>}></Route>
          <Route path='search' element={<Search></Search>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='proddetail'>
            <Route path=':id-product' element={<ProductDetail></ProductDetail>}></Route>
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
)
