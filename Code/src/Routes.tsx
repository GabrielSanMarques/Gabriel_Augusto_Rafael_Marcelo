import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { Quiz } from './pages/Quiz'
import { Ranking } from './pages/Ranking'
import { Store } from './pages/Store'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/store" element={<Store />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </Router>
    )
}