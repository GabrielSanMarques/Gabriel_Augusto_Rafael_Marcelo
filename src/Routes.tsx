import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}