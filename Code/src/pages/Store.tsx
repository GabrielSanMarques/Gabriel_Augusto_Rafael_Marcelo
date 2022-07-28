import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../components/General/Background";
import { FramePrincipal } from "../components/General/FramePrincipal";
import { Menu } from "../components/General/Menu";
import { QuizComponent } from "../components/QuizComponent";
import AuthService from "../services/auth.service";


const BuildingImage = {
    position: 'absolute',
    width: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '2%',
}

const Title = {
    fontSize: '2.5vw',
    color: '#2F4550',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '7%',
}

export function Store() {

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
                <h1 style={Title}>Em construção...</h1>
                <object data="src\img\building.svg" style={BuildingImage}> </object>
            </FramePrincipal>
            <Menu />
            <Background />
        </div>
        
    ) 
}