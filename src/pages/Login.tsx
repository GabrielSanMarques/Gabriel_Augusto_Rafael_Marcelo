import { Background } from "../components/General/Background";
import { Frame } from "../components/General/Frame";
import { FrameFormLogin } from "../components/Login/FrameFormLogin";
import { FrameImageLogin } from "../components/Login/FrameImageLogin";

export function Login() {
    return (
        <div>
            <Background>
                <Frame>
                    <FrameFormLogin />
                    <FrameImageLogin />
                </Frame>
            </Background>
        </div>
    )
}