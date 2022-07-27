import { Background } from "../components/General/Background"
import { FramePrincipal } from "../components/General/FramePrincipal"
import { Menu } from "../components/General/Menu"
import { RankingList } from "../components/Ranking/RankingList"

export function Ranking() {


    return (
        <div>
            <FramePrincipal>
                <RankingList />
            </FramePrincipal>
            <Menu />
            <Background />
        </div>
    )
}