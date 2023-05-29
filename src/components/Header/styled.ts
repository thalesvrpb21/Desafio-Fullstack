import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;

    h1{
        font-size: var(--rem-15);
    }

    a{
        font-size: var(--rem-11);
        font-weight: 600;
    }

`

export { StyledHeader }