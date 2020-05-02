import styled from 'styled-components'

const StyledMenuFixedRight = styled.section`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    input {
        width: 80%;
    }

    h2 {
        text-align: center;
        font-size: 1.8em;
        color: #2D2D2D;
        font-weight: 500;
        padding-top: 30px;
    }

    .separator {
        width: 230px;
        height: 2px;
        min-height: 2px;
        background-color: #2D2D2D;
        margin: 30px 0 30px 0;
    }

    p {
        line-height: 22px;
        color: grey;
        padding-bottom: 20px;
        text-align: justify;
    }

    button {
        margin-top: 20px;
    }
`

export default StyledMenuFixedRight;