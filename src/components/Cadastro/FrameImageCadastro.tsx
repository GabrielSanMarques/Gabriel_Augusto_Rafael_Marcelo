import { styled } from "../../Theme";
import { Image } from "../General/Image";
import cadastroImage from "../../img/cadastroImage.png"

const FrameImage = styled('div', {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '$gray',
    left: 0,
    bottom: 0,
    width: '35%',
    height: '100%',
})

const Subtitle = styled('h5', {
    color: '$green100',
    fontWeight: 'light',
    fontSize: '1.2vw',
    marginTop: '15%',
})

const Title = styled('h1', {
    color: '$green400',
    fontSize: '3.5vw',
})

export function FrameImageCadastro() {
    return (
        <FrameImage>
            <Subtitle>Prazer em conhecê-lo!</Subtitle>
            <Title>Bem-vindo.</Title>
            <Image src={cadastroImage}></Image>
        </FrameImage>
    )
}