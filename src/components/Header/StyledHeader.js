import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${ ({theme}) => theme.header.background};
    position: fixed;
    top: 5px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0,0,0,0.11);
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
        font-size: 24px;
        font-weight: 600;
        font-family: 'Patua One';
        color: #010229;
    }

    .wrapper-header.right {
        width: auto;
        height: 100%;
    }

    .wrapper-search {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        background: #0079c6;
        font-size: 1.6em;
        color: white;
        cursor: pointer;
    }

    .wrapper-social {
        background: transparent;
        width: 50px;
        height: 60px;
        border-left: 1px solid rgba(0,0,0,0.11);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        cursor: pointer;
    }
    
    .wrapper-social.twitter {
        color: #00b9ff;
        transition: 400ms;
    }
    .wrapper-social.twitter:hover {
        color: white;
        background-color: #00b9ff;
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
       background-color: #c4302b;
       transition: 400ms;
    }
    .wrapper-social.mail {
       color: #E6AC67;
       transition: 400ms;
    }
    .wrapper-social.mail:hover {
       background-color: #E6AC67;
       color: white;
       transition: 400ms;
    }

    .ais-SearchBox-input {
        position: fixed;
        top: 65px;
        right: 0px;
        width: 264px;
        height: 40px;
        outline: none;
        font-size: 1.1em;
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
        font-size: 1.1em;
        color: #B5B5B5;
    }

    .ais-Hits {
        position: fixed;
        top: 105px;
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
    
    .noResults {
        position: fixed;
        top: 105px;
        border-left:1px solid rgba(0,0,0,0.11);
        border-bottom:1px solid rgba(0,0,0,0.11);
        background-color: rgba(255,255,255,0.99);
        width: 264px;
        z-index: 100;
        font-size: 0.9em;
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