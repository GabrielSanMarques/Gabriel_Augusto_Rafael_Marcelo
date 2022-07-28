import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import * as yup from "yup";
import { styled } from "../../Theme";
import { useState } from "react";

type ButtonProps = {
    style: {},
}

interface CadastroValues {
    nome: string,
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
    right: 0,
    bottom: 0,
    width: '65%',
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

const SidedLabel = styled('label',{
    color: '$green100',
    textAlign: 'left',
    position: 'relative',
    display: 'inline-block',
    width: '45%',
    marginRight: '3.5%',
    '&>h5':{
        position: 'relative',
        display: 'block',
        marginTop: '3%',
        marginLeft: '1%',
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

const StyleFieldInline = {
    display: 'inline-block',
    border: 0,
    backgroundColor: '#F4F5F6',
    color: '#2F4550',
    fontSize: '1vw',
    borderRadius: 10,
    paddingLeft: '10%',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '3vw',
    outline: 'none',
}

const SidedInputs = styled('div', {
    display: 'block',
    marginLeft: '11.5%',
    width: '80%',
})

const SidedWarnings = styled('div', {
    display: 'inline-block',
    marginLeft: '11.5%',
    width: '80%',
})

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

const MessageSuccess = {
    color: 'green',
}

const MessageFailure = {
    color: 'red',
}

const StyledMessage = styled('div', {
    display: 'block',
    marginTop: '2%',
    fontSize: '1vw',
})

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
    textAlign: 'right',
    marginRight: '8%',
    marginTop: '5%',
})

const Warning = styled('span', {
    color: 'red',
    marginTop: '1%',
    fontSize: '1vw',
})

const WarningSide1 = styled('span', {
    position: 'fixed',
    width: '45%',
    display: 'inline-block',
    color: 'red',
    marginTop: '-2%',
    fontSize: '1vw',
    marginLeft: '-47%'
})

const WarningSide2 = styled('span', {
    position: 'fixed',
    width: '45%',
    display: 'inline-block',
    color: 'red',
    marginTop: '-2%',
    fontSize: '1vw',
    marginLeft: '-9%',
})

export function FrameFormCadastro() {
    const [message, setMessage] = useState();
    const [successfull, setSucessfull] = useState(false);
    const navigate = useNavigate();

    const LoadLogin = () => {
        navigate("/login");
    }

    const initialValues: CadastroValues = 
    { 
        nome: '',
        email: '',
        password: '',
    };

    const handleClickCadastro = (values: CadastroValues) => {
        Axios.post('http://localhost:8080/api/auth/cadastro', {
            nome: values.nome,
            email: values.email,
            password: values.password,
        }).then((response) => {
            setMessage(response.data.message);
            setSucessfull(true);
            setTimeout(
                LoadLogin,
                1500
            )
        },
        error => {
            const resMessage =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
            setSucessfull(false);
            setMessage(resMessage);
        }
        );
    };

    const validationCadastro = yup.object().shape({
        nome: yup
            .string()
            .required("Campo obrigatório!"),
        email: yup
            .string()
            .email("Digite um e-mail válido!")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .min(8, "Senha deve ter no mínimo 8 caracteres!")
            .required("Campo obrigatório!")
    });


    return (
        <StyledForm>
            <Logo>pré-calc</Logo>
            <CenterForm>
                <Formik 
                initialValues={initialValues}
                onSubmit={handleClickCadastro}
                validationSchema={validationCadastro}>
                    <Form>
                        <Title>Registre-se</Title>
                        <Subtitle>Sua jornada no pré-cálculo começa agora.</Subtitle>

                        <SidedInputs>
                            <SidedLabel><h5>Nome:</h5>
                                <Field name="nome" placeholder="Nome" style={StyleFieldInline} />
                            </SidedLabel>
                            
                            <SidedLabel><h5>E-mail:</h5>
                                <Field name="email" placeholder="Email" style={StyleFieldInline} />
                            </SidedLabel>
                        </SidedInputs>

                        <SidedWarnings>
                            <WarningSide1 as={ErrorMessage}
                                    component="span"
                                    name="nome"
                            />
                            <WarningSide2 as={ErrorMessage}
                                    component="span"
                                    name="email"
                            />
                        </SidedWarnings>

                        <Label><h5>Senha:</h5>
                            <Field name="password" type="password" placeholder="Senha" style={StyleField} />
                        </Label>
                        <Warning as={ErrorMessage}
                            component="span"
                            name="password"
                        />
                        
                        <StyledMessage>
                            {
                                message && 
                                <span style={successfull ? MessageSuccess : MessageFailure}>{message}</span>
                            }
                        </StyledMessage>
                        <button type="submit" style={StyleButton}>Registrar</button>
                        <StyledLink as={Link} to="/login">
                            Já possui uma conta? <span style={{color: '#2FA38E'}}>Login</span>
                        </StyledLink>
                    </Form>
                </Formik>        
            </CenterForm>
        </StyledForm>
    )
}