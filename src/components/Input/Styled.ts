import styled from "styled-components";

const StyledFieldset = styled.fieldset`

border-radius: var(--radius-6);

padding: 0 20px

legend{
    margin-bottom: 10px;

    font-size: var(--rem-08);

}

input{
    padding: 5px 10px;

    border: 1px solid var(--white);
    border-radius: var(--radius-4);

    outline: none;

    font-size: var(--rem-09);

}

input::placeholder{

    color: var(--grey-3);

    font-size: var(--rem-06);
}

`
const StyledForm = styled.form`

    padding: 0 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;

`


export {StyledFieldset, StyledForm}