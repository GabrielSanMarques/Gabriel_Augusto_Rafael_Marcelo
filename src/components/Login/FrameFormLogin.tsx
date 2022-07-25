import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import * as yup from "yup";
import { styled } from "../../Theme";
import { useEffect } from "react";
import AuthService from "../../services/auth.service";

type ButtonProps = {
    style: {},
}

interface LoginValues {
    email: string,
    password: string,
}

const Title = styled('h1', {
    color: '$green100',
    fontWeight: 'bolder',
    textAlign: 'left',
    marginLeft: '12.5%',
    fontSize: '2.3vw',
})

const Subtitle = styled('h5', {
    color: '$green100',
    fontWeight: 'lighter',
    textAlign: 'left',
    marginLeft: '12.5%',
    marginTop: '1%',
    marginBottom: '2%',
    fontSize: '1vw',
})

const StyledForm = styled('div', {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '$white',
    left: 0,
    bottom: 0,
    width: '40%',
    height: '100%',
})

const Label = styled('label',{
    color: '$green100',
    textAlign: 'left',
    display: 'block',
    '&>h5':{
        position: 'relative',
        display: 'block',
        marginTop: '3%',
        marginLeft: '12.5%',
        fontWeight: 'lighter',
    }
})

const StyleField = {
    display: 'block',
    border: 0,
    backgroundColor: '#F4F5F6',
    color: '#2F4550',
    fontSize: '1vw',
    borderRadius: 10,
    paddingLeft: '10%',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%',
    height: '3vw',
    outline: 'none',
}

const StyleButton = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '7%',
    color: 'white',
    width: '60%',
    height: '3vw',
    background: '#030202',
    borderRadius: '48px',
    cursor: 'pointer',
}

const CenterForm = styled('div', {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
})

const StyledLink = styled('a', {
    display: 'block',
    color: '$green100',
    textDecoration: 'none',
    fontSize: '1vw',
    marginTop: '2%',
})

const Logo = styled('h3', {
    color: '$green400',
    display: 'block',
    textAlign: 'left',
    marginLeft: '12.5%',
    marginTop: '10%',
})

const Warning = styled('span', {
    color: 'red',
    marginTop: '1%',
    fontSize: '1vw',
})

export function FrameFormLogin() {

    const navigate = useNavigate();

    const initialValues: LoginValues = 
    { 
        email: '',
        password: '',
    };

    const handleClickLogin = (values: LoginValues) => {
        Axios.defaults.withCredentials = true;
        const { email, password } = values;
        AuthService.login(email, password).then(
            () => {
                navigate("/")
            },
            (error: any) => {
                console.log(error);
            }
        );
    };

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Digite um e-mail válido!")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .min(8, "Senha deve ter no mínimo 8 caracteres!")
            .required("Campo obrigatório!")
    })

    return (
        <StyledForm>
            <Logo>pré-calc</Logo>
            <CenterForm>
                <Formik 
                initialValues={initialValues}
                onSubmit={handleClickLogin}
                validationSchema={validationLogin}>
                    <Form>
                        <Title>Login</Title>
                        <Subtitle>Sua jornada no pré-cálculo espera.</Subtitle>
                        <Label><h5>E-mail:</h5>
                            <Field name="email" placeholder="Email" style={StyleField} />
                        </Label>
                        <Warning as={ErrorMessage}
                            component="span"
                            name="email"
                        />

                        <Label><h5>Senha:</h5>
                            <Field name="password" type="password" placeholder="Senha" style={StyleField} />
                        </Label>
                        <Warning as={ErrorMessage}
                            component="span"
                            name="password"
                        />
                        <button type="submit" style={StyleButton}>Login</button>
                        {/*<ButtonLogin style={StyleButton}></ButtonLogin>*/}
                        <StyledLink as={Link} to="/cadastro">
                            Não possui uma conta? <span style={{color: '#2FA38E'}}>Registre-se</span>
                        </StyledLink>
                    </Form>
                </Formik>        
            </CenterForm>
        </StyledForm>
    )
}