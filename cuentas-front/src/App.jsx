import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './views/login'
import Home from './views/Home'
import Index from './views/index'
import Browse from './views/browse'
import Play from './views/play'
import Dashboard from './views/dashboard'
import MainDashboard from './views/MainDashboard'
import SuscriptionsDashboard from './views/SuscriptionsDashboard'
import SeriesDashboard from './views/SeriesDashboard'
import ProfilesDashboard from './views/ProfilesDashboard'
import IconsDashboard from './views/IconsDashboard'
import GenresDashboard from './views/GenresDashboard'
import ContentsDashboard from './views/ContentsDashboard'
import AdsDashboard from './views/AdsDashboard'
import Payment from './views/payment'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/play" element={<Play/>}/>

        {/* ESTA ES LA RUTA CORRECTA DEL PAYMENT */}
        <Route path="/payment" element={<Payment/>}/>  {/* ✔✔✔ */}

        {/* RUTAS DEL DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<MainDashboard/>}/>
          <Route path="suscriptions" element={<SuscriptionsDashboard/>}/>
          <Route path="series" element={<SeriesDashboard/>}/>
          <Route path="profiles" element={<ProfilesDashboard/>}/>
          <Route path="icons" element={<IconsDashboard/>}/>
          <Route path="genres" element={<GenresDashboard/>}/>
          <Route path="contents" element={<ContentsDashboard/>}/>
          <Route path="ads" element={<AdsDashboard/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
