import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { styled } from "../../Theme";
import UserService from "../../services/user.service";

function getCurrentUserPoints(currentUser:any){
    return UserService.getUserPoints(currentUser.id);
}

const PerfilDiv = styled('div', {
    textAlign: 'left',
    position: 'absolute',
    color: '$green100',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    borderRadius: '1vw',
    backgroundColor: '$white',
    padding: '5%',
    boxShadow: '0 5px 5px 0px rgba(0, 0, 0, 0.05)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '2%',
})

export function UserInfo() {
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());
    const [userPoints, setUserPoints] = useState(UserService.getUserPoints(currentUser.id));
    const nomeUsuario = currentUser.nome;
    const emailUsuario = currentUser.email;
    const [points, setPoints] = useState([]);
    const [gotPoints, setGotPoints] = useState(false);

    useEffect(() => {
        awaitPoints();
    })

    const awaitPoints = async() => {
        if(!gotPoints)
        {
            setPoints(await getCurrentUserPoints(currentUser));
            setGotPoints(true);
        }
    }

    return (
        <PerfilDiv>
            <h1>{nomeUsuario}</h1>
            <h2 style={{color: '#586F7C'}}>{emailUsuario}</h2>
            <h2 style={{color: '#586F7C'}}>Pontos obtidos: {points.points}</h2>
        </PerfilDiv>        
    )
}