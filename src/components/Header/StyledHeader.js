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
        width: 255px;
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
    }
    
    .wrapper-social.twitter {
        color: #00b9ff;
    }
    .wrapper-social.insta svg * {
        fill: url(#rg);
    }
    .wrapper-social.youtube {
       color: #c4302b;
    }
    .wrapper-social.mail {
       color: #E6AC67;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
}
`

export default StyledHeader;