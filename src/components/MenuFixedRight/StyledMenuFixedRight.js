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
        margin-top: 10px;
    }

    h2 {
        text-align: center;
        font-size: 1.8em;
        color: ${({theme}) => theme.title};
        font-weight: 500;
        padding-top: 30px;
    }

    .separator {
        width: 230px;
        height: 2px;
        min-height: 2px;
        background-color: ${({theme}) => theme.title};
        margin: 30px 0 30px 0;
    }

    p {
        line-height: 22px;
        color: ${({theme}) => theme.paragraphe};
        padding-bottom: 20px;
        display: inline;
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
        color: ${({theme}) => theme.title};
        font-size: 0.9em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
    }
    a {
        font-weigth: bold;
        color: #0079c6;
        text-decoration: none;
        padding: 0 4px 0 4px;
    }

    @media screen and (max-width: 850px) {
		width: 100%;
        input {
            padding: 10px;
            width: 50%;
        }
	}
}
`

export default StyledMenuFixedRight;