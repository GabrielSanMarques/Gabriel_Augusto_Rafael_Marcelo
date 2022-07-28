import { Link, useNavigate } from "react-router-dom"
import { styled } from "../../Theme"
import { FaArrowRight, FaHome, FaMedal, FaShoppingCart, FaUserAlt } from  "react-icons/fa"
import AuthService from "../../services/auth.service"
import { useEffect } from "react"

const MenuDiv = styled('div', {
    position: 'fixed',
    textAlign: 'center',
    color: '$white',
    float: 'left',
    width: '20%',
    height: '100%',
    backgroundImage: 'linear-gradient(to top, $green300, $green400)',
})

const MenuNav = styled('div', {
    fontWeight: 'lighter',
    fontSize: '1.25vw',
    height: '100%',
})

const Logo = styled('div', {
    fontSize: '2vw',
    fontWeight: 'bold',
    padding: '15%',
    marginBottom: '20%',
    height: '10%',  
})

const MenuItem = styled('li', {
    display: 'flex',
    verticalAlign: 'center',
    textAlign: 'left',
    paddingLeft: '18%',
    paddingTop: '6.5%',
    paddingBottom: '3%',
    backgroundImage: 'rgba(0, 0, 0, 0)',
    '&:hover': {
        backgroundColor: '$green300',
        cursor: 'pointer',
        borderLeft: '0.45vw white solid',
    }
})

const MenuIcon = styled('div', {
    marginRight: '6%',
    marginTop: '-0.7%',
    fontSize: '135%'
})

const StyledLink = styled('a', {
    color: 'white',
    textDecoration: 'none',
})

const LogoutLabel = styled('div', {
    position: 'absolute',
    bottom: 0,
    fontSize: '1vw',
    width: '100%',
    textAlign: 'center',
    paddingBottom: '10%',
    '&:hover': {
        textDecoration: 'underline',
    }
})

const LogoutIcon = {
    marginLeft: '2%',
    fontSize: '0.8vw',
}

export function Menu() {

    useEffect(() => {
        // Update the document title using the browser API
        const currentUser = AuthService.getCurrentUser();
        if(!currentUser) {
            Logout();
        }
      });

    const navigate = useNavigate();

    const Logout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return(
        <MenuDiv>
            <Logo>pré-calc</Logo>
            <MenuNav>
                <ul className="menu-items">
                    <StyledLink as={Link} to="/">
                        <MenuItem>
                            <MenuIcon><FaHome></FaHome></MenuIcon>
                            Home      
                        </MenuItem>
                    </StyledLink>
                    <StyledLink as={Link} to="/profile">
                        <MenuItem>
                            <MenuIcon><FaUserAlt></FaUserAlt></MenuIcon>
                            Perfil  
                        </MenuItem>
                    </StyledLink>
                    <StyledLink as={Link} to="/store">
                        <MenuItem>
                            <MenuIcon><FaShoppingCart></FaShoppingCart></MenuIcon>
                            Loja  
                        </MenuItem>
                    </StyledLink>
                    <StyledLink as={Link} to="/ranking">
                        <MenuItem>
                            <MenuIcon><FaMedal></FaMedal></MenuIcon>
                            Ranking     
                        </MenuItem>
                    </StyledLink>
                    <StyledLink onClick={Logout} as={Link} to="/login">
                        <LogoutLabel>
                            Logout
                            <FaArrowRight style={LogoutIcon}></FaArrowRight>
                        </LogoutLabel>
                    </StyledLink>
                </ul>
                        
             </MenuNav>
        </MenuDiv>
    )

}