import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${ ({ theme }) => theme.background};
    position: fixed;
    top: 5px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #EDEDED;
    z-index: 1;

    &::before {
        content: "";
        width: 100%;
        height: 5px;
        background: linear-gradient(to right,#010229,#0079c6);
        position: absolute;
        left: 0;
        top: -5px;
    }

    .wrapper-header {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
    }
    
    .wrapper-header.left {
        justify-content: space-around;
    }

    .wrapper-header.left h1 {
        font-size: 24px !important;
        margin: 0 !important;
        font-weight: 600;
        font-family: 'Patua One';
        color: ${ ({ theme }) => theme.title};
    }

    .wrapper-header.right {
        width: auto;
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        justify-content: center !important;

        @keyframes slide {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
        .wrapper-menu {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: 500ms;
            z-index: 10;
            position: fixed;
            top: 5px;
            left: 0px;
            background-color: #010229;
            padding: 5px;
            height: 59px;
            width: 60px;
        }

        .wrapper-menu:hover {
            background-color: #010229;
        }

        .wrapper-croix:hover {
            background-color: #010229;
        }

        .ligne {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40%;
            height: 3px;
            border-radius: 5px;
            transition: all 0ms 300ms;
            background-color: white;
        }
        .ligne::before {
            content: '';
            background-color: white;
            position: absolute;
            bottom: 8px;
            width: 100%;
            height: 3px;
            border-radius: 5px;
            transition: bottom 300ms 300ms ease, transform 300ms ease;
        }
        .ligne::after {
            content: '';
            background-color: white;
            position: absolute;
            top: 8px;
            width: 100%;
            height: 3px;
            border-radius: 5px;
            transition: top 300ms 300ms ease, transform 300ms ease;
        }

        .wrapper-menu.wrapper-croix .ligne::before{
            bottom: 0;
            transform: rotate(-45deg);
            background-color: #ffffff;
            transition: bottom 300ms ease, transform 300ms 300ms ease;
        }

        .wrapper-menu.wrapper-croix .ligne {
            background-color: transparent;
            transition: 10ms
        }

        .wrapper-menu.wrapper-croix .ligne::after{
            top: 0;
            transform: rotate(45deg);
            background-color: #ffffff;
            transition: top 300ms ease, transform 300ms 300ms ease;
        }

        .gatsby-image-wrapper {
            margin: 0px 10px 0px 10px !important;
        }
        .wrapper-header.left {
            width: calc(100vw - 120px)
            justify-content: center;
        }

        .wrapper-search {
            position: fixed;
            top: 5px;
            right: 0px;
        }
        .wrapper-social {
            position: fixed;
            background-color: ${({ theme }) => theme.background} !important;
            height: 50px;
            width: 60px !important;
            border-bottom: 1px solid #EDEDED;
            border-right: 1px solid #EDEDED;
            animation: slide 300ms alternate ease-in forwards;
        }
        .wrapper-social.twitter {
            top: 65px;
            left: 0;
        }
        .wrapper-social.insta {
            top: 125px;
            left: 0;
        }
        .wrapper-social.youtube {
            top: 185px;
            left: 0;
        }
        .wrapper-social.mail {
            top: 245px;
            left: 0;
        }
    }
    @media screen and (max-width: 415px) {
        .gatsby-image-wrapper {
            margin: 0px 10px 0px 10px !important;
        }
        .wrapper-header.left h1 {
            font-size: 18px !important;
        }
    }

    .wrapper-search {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 59px;
        width: 60px;
        background: #0079c6;
        font-size: 1.6em !important;
        color: white;
        cursor: pointer;
    }

    .wrapper-social {
        background: transparent;
        width: 50px;
        height: 60px;
        border-left: 1px solid #EDEDED;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em !important;
        cursor: pointer;
    }
    
    .wrapper-social.twitter {
        color: #00b9ff;
        transition: 400ms;
        border-right: 1px solid #EDEDED;
    }
    .wrapper-social.twitter:hover {
        color: white;
        background-color: #00b9ff !important;
        transition: 400ms;
    }
    .wrapper-social.insta svg * {
        fill: url(#rg);
        transition: 400ms;
    }

    .wrapper-social.insta:hover {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        transition: 400ms;
    }
    .wrapper-social.youtube {
       color: #c4302b;
       transition: 400ms;
    }
    .wrapper-social.youtube:hover {
       color: white;
       background-color: #c4302b !important;
       transition: 400ms;
    }
    .wrapper-social.mail {
       color: #E6AC67;
       transition: 400ms;
    }
    .wrapper-social.mail:hover {
       background-color: #E6AC67 !important;
       color: white;
       transition: 400ms;
    }

    .ais-SearchBox-input {
        position: fixed;
        top: 64px;
        right: 0px;
        width: 260px;
        height: 40px;
        outline: none;
        font-size: 1.1em !important;
        color: grey;
        border-radius: 0%;
        border: 1px solid rgba(0,0,0,0.11);
    }

    .ais-SearchBox-submit, .ais-SearchBox-reset {
        display:none;
        cursor:pointer;
    }

    .ais-SearchBox-input::placeholder {
        font-style: italic;
        font-size: 1.1em !important;
        color: #B5B5B5;
    }

    .ais-Hits {
        position: fixed;
        top: 105px;
        right: 0px;
        border-left:1px solid rgba(0,0,0,0.11);
        border-bottom:1px solid rgba(0,0,0,0.11);
        background-color: rgba(255,255,255,0.99);
        overflow: scroll;
        max-height: 70vh;
        width: 264px;
        z-index: 100;
    }
    .ais-Hits-list {
        padding: 10px;
    }

    .ais-Hits-item {
        margin-bottom: 10px;
    }
    .ais-Hits-item:hover {
        background-color: rgba(0,0,0,0.05) !important;
        transition: 300ms !important;
    }
    
    .noResults {
        position: fixed;
        top: 105px;
        border-left:1px solid rgba(0,0,0,0.11);
        border-bottom:1px solid rgba(0,0,0,0.11);
        background-color: rgba(255,255,255,0.99);
        width: 264px;
        z-index: 100;
        font-size: 0.9em !important;
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    }

    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
}
`

export default StyledHeader;