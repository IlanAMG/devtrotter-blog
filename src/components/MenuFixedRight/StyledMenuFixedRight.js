import styled from 'styled-components'

const StyledMenuFixedRight = styled.section`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 14%;
        min-height: 90px;
    }
    input {
        width: 80%;
        height: 20px;
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

    .wrapper-btn-form {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn:link,
    .btn {
        text-transform: uppercase;
        text-decoration: none;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
        position: absolute;
        cursor: pointer;
        font-size: 0.7em;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-white {
        background-color: #0079c6;
        color: white;
    }

    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    .btn-white::after {
        background-color: #0079c6;
    }

    .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .btn-animated {
        animation: moveInBottom 5s ease-out;
        animation-fill-mode: backwards;
    }

    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    label {
        color: #2D2D2D;
        font-size: 0.9em;
    }
    a {
        font-style: bold;
        color: #0079c6;
        text-decoration: none;
    }
`

export default StyledMenuFixedRight;