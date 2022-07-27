import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../components/General/Background";
import { FramePrincipal } from "../components/General/FramePrincipal";
import { Menu } from "../components/General/Menu";
import { UserInfo } from "../components/Perfil/UserInfo";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

async function getRanking(){
    const rank = await UserService.getUserRanking();
    console.log(`Rank:${JSON.stringify(rank[0])}`);
    return rank[0];
}

export function Ranking() {
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());
    const ranking = getRanking().then((result) => {return result});
    console.log(ranking);

    return (
        <div>
            {}
        </div>
    )
}