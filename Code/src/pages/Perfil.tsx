import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../components/General/Background";
import { FramePrincipal } from "../components/General/FramePrincipal";
import { Menu } from "../components/General/Menu";
import { UserInfo } from "../components/Perfil/UserInfo";
import AuthService from "../services/auth.service";

export function Perfil() {
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());

    const navigate = useNavigate();

    useEffect(() => {
        if(!currentUser) {
            Logout();
        }
    })
    
    const Logout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return (
        <div>
            <FramePrincipal>
                <UserInfo />
            </FramePrincipal>
            <Menu />
            <Background />
        </div>
        
    ) 
}