import styled, { css } from 'styled-components'

const StyledFooter = styled.footer`

    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    width: 100%;

    .wrapper-contact {
        width: 100vw;
        position: absolute;
    }

    .container-footer-contact {
        display: flex;
        align-items: center;
        height: 80px;
        justify-content: center;
        bottom: 120px;
        background: linear-gradient(to right,#010229,#0079c6);
        width: 100%;
        position: absolute;
        transition: 400ms;
        -webkit-box-shadow: 0px -7px 65px -12px rgba(0,0,0,0.75);
    }

    .container-footer-contact span {
        padding: 30px;
        color: white;
        cursor: pointer;
    }
    .container-footer-contact span:hover {
        background: rgba(255,255,255,0.15)
    }

    .container-footer-sign {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        background: #010229;
        flex-direction: column;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .container-footer-sign span {
        color: #BABABA;
        padding: 4px;
    }
    .container-footer-sign span:nth-child(3) {
        color: white;
        padding: 4px;
    }

    .container-form {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .wrapper-close {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        cursor: pointer;
        height: 40px;
        width: 40px;
        transition: 400ms;
        color: white;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .container-form h3 {
        font-size: 48px;
        text-transform: uppercase;
        color: white;
        padding: 25px;
        text-align: center;
    }
    .container-form h4 {
        font-size: 18px;
        color: white;
        padding: 25px;
        text-align: center;
    }
    .container-form h4 a {
        color: #F8DD8B;
        font-style: 900;
    }
    .container-form form {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 80%;
        height: 70%;
    }
    .container-form form .container-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
    .container-form form input {
        width: 29%;
        height: 100%;
        padding: 12px !important;
        font-size: 20px;
    }
    .container-form form textarea {
        width: 100%;
        height: 50%;
        font-size: 20px;
        padding-top: 5px;
    }

    input::placeholder {
        color: grey;
        font-style: italic;
    }
    textarea::placeholder {
        color: grey;
        font-style: italic;
    }

    .wrapper-btn-form {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

.btn:link,
.btn {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    position: absolute;
    cursor: pointer;
    font-size: 1em;
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
    background-color: #fff;
    color: #010229;
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
    background-color: #fff;
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
`

export default StyledFooter;