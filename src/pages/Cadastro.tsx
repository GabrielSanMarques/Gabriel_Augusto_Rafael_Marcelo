import { Background } from "../components/General/Background";
import { Frame } from "../components/General/Frame";
import { FrameFormCadastro } from "../components/Cadastro/FrameFormCadastro";
import { FrameImageCadastro } from "../components/Cadastro/FrameImageCadastro";

export function Cadastro() {
    return (
        <div>
            <Background>
                <Frame>
                    <FrameFormCadastro />
                    <FrameImageCadastro />
                </Frame>
            </Background>
        </div>
    )
}