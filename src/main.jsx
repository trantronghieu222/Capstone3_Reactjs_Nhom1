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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HistoryRouter history={navigateHistory}>
      <Routes>
        <Route path='' element={<HeaderHome></HeaderHome>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='search' element={<Search></Search>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
)
