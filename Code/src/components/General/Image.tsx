import { styled } from "../../Theme";

type ImageProps = {
    src: string;
}

const StyledImage = styled('div', {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
})

const ImageStyle = {
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
}

export function Image(props: ImageProps) {
    return (
        <StyledImage>
            <img src={props.src} style={ImageStyle}/>
        </StyledImage>
    )
}