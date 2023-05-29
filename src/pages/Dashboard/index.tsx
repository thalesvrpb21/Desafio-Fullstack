import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { IDataRegisterContat } from "../../hooks/interfaces";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { registerSchema } from "../../schema/schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledForm } from "../../components/Input/Styled";
import { StyledHeader } from "../../components/Header/styled";
import { StyledMain } from "./styled";


function Dashboard () {

    const { register, handleSubmit, formState: { errors } } = useForm<IDataRegisterContat>({
        resolver: yupResolver(registerSchema)
    });

    const {registerContat} = useContext(UserContext)

    return (
        <>
            <StyledHeader>
                <h1>Bem vindo ao desafio Full-Stack</h1>
            </StyledHeader>
            
            <StyledMain>
                <h2>Cadastre seus contatos aqui, crie uma agenda online para nunca perder seus
                    contatos
                </h2>
                <StyledForm onSubmit={handleSubmit(registerContat)}>
                    <Input legend="Nome completo" type="text" placeholder="Digite seu nome" register={register} 
                    nameError="name" />
                    {errors.name?.message && <span>{errors.name.message}</span>}

                    <Input legend="Numero de telefone" type="text" placeholder="Digite seu numero" register={register} 
                    nameError="phone" />
                    {errors.numero?.message && <span>{errors.numero.message}</span>}

                    <Input legend="Email" type="email" placeholder="Digite seu email" register={register} 
                    nameError="email" />
                    {errors.email?.message && <span>{errors.email.message}</span>}

                    <Button type="submit" writing="Cadastrar" />

                </StyledForm>
            </StyledMain>
        </>
    )
}

export {Dashboard}