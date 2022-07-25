import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";


export function UserInfo() {
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());
    const nomeUsuario = currentUser.nome;
    const emailUsuario = currentUser.email;

    return (
        <div>
            <h1>{nomeUsuario}<br />{emailUsuario}</h1>
        </div>        
    )
}