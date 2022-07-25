import { styled } from "../../Theme";

export const Background = styled('div', {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: 'linear-gradient(to top, $green300, $green400)',
})