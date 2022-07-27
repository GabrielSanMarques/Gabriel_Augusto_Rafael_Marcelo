import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../General/Background";
import { FramePrincipal } from "../General/FramePrincipal";
import { Menu } from "../General/Menu";
import { UserInfo } from "../Perfil/UserInfo";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
import { styled } from "../../Theme";

const Title = styled('div', {
    color: '$green100',
    fontWeight: 'bolder',
    fontSize: '2.8vw',
    marginTop: '5%',
    marginBottom: '5%',
})

const RankDiv = styled('div', {
    color: '$green100',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginBottom: '1%',
    borderRadius: '1vw',
    backgroundColor: '$white',
    padding: '5%',
    boxShadow: '0 5px 5px 0px rgba(0, 0, 0, 0.05)',
})

const UserName = styled('div',  {
    fontSize: '2vw',
    fontWeight: 'bold',
    textAlign: 'left',
})

const UserPoints = styled('div', {
    color: '$green200',
    fontWeight: 'light',
    textAlign: 'left',
})

const Medal = styled('div', {
    width: '8%',
    position: 'absolute',
    display: 'inline-block',
    right: 0,
    marginRight: '30%',
    marginLeft: 'auto',
    marginTop: '-8%',
})

const MedalStyle = {
    marginRight: 0,
    marginLeft: 'auto',
    display: 'block',
    width: '100%',
}

function getRanking(){
    return UserService.getUserRanking();
}

export function RankingList() {
    const [currentUser, setUser] = useState(AuthService.getCurrentUser());
    const [ranking, setRanking] = useState([]);
    const [gotRank, setGotRank] = useState(false);
    var medal = '';

    useEffect(() => {
        awaitRanking();
    })

    const awaitRanking = async() => {
        if(!gotRank)
        {
            setRanking(await getRanking());
            setGotRank(true);
        }
    }

    console.log(ranking);

    return (
        <div>
            <Title>
                Ranking - Top 5
            </Title>
            {ranking.map((user:any, index) => 
            <RankDiv>
                <UserName>
                    {user.nome}
                </UserName>
                <UserPoints>
                    Pontos: {user.points}
                </UserPoints>
                <Medal>
                    {index == 0 ? <img src="src\img\medals\ouro.png" alt="Ouro" style={MedalStyle}/> : ''}
                    {index == 1 ? <img src="src\img\medals\prata.png" alt="Prata" style={MedalStyle} /> : ''}
                    {index == 2 ? <img src="src\img\medals\bronze.png" alt="Bronze" style={MedalStyle}/> : ''}
                </Medal>
            </RankDiv>)}
        </div>
    )
}