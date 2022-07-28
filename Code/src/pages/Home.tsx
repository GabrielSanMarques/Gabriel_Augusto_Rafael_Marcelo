import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../components/General/Background";
import { FramePrincipal } from "../components/General/FramePrincipal";
import { Menu } from "../components/General/Menu";
import { QuizComponent } from "../components/QuizComponent";
import AuthService from "../services/auth.service";



export function Home() {

    const Logout = () => {
        AuthService.logout();
        navigate("/login");
    };

    const [currentUser, setUser] = useState(AuthService.getCurrentUser());

    const navigate = useNavigate();

    useEffect(() => {
        if(!currentUser) {
            Logout();
        }
    })

    return (
        <div>
            <FramePrincipal>
                
            </FramePrincipal>
            <Menu />
            <Background />
        </div>
        
    ) 
}