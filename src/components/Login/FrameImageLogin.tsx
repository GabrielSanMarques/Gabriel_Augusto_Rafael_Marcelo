import { styled } from "../../Theme";
import { Image } from "../General/Image";
import loginImage from "../../img/loginImage.png"

const FrameImage = styled('div', {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '$gray',
    right: 0,
    bottom: 0,
    width: '60%',
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

export function FrameImageLogin() {
    return (
        <FrameImage>
            <Subtitle>É bom te ver de novo!</Subtitle>
            <Title>Bons estudos.</Title>
            <Image src={loginImage}></Image>
        </FrameImage>
    )
}