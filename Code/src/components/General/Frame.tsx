import { styled } from "../../Theme"

export const Frame = styled('div', {
    position: 'fixed',
    width: '90%',
    height: '80%',
    backgroundColor: '$white',
    padding: '5%',
    boxShadow: '0 10px 10px 0px rgba(0, 0, 0, 0.15)',
    borderRadius: 30,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
})