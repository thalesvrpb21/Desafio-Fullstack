import { IInputProps } from "../../hooks/interfaces"
import { StyledFieldset } from "./Styled"

function Input ({legend, type, placeholder, register, nameError}: IInputProps){

    return (
        <StyledFieldset>
            <legend>{legend}</legend>
            <input type={type} placeholder={placeholder} {...register(nameError)}/>
        </StyledFieldset>
    )
}

export {Input}