import styled from 'styled-components'

const StyledFooter = styled.footer`

    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0px;
    height: auto;
    width: 100%;

    .container-footer-contact {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        background: linear-gradient(to right,#010229,#0079c6);
    }

    .container-footer-contact span {
        padding: 30px;
        color: white;
    }

    .container-footer-sign {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        background: #010229;
        flex-direction: column;
    }
    .container-footer-sign span {
        color: #BABABA;
        padding: 4px;
    }
    .container-footer-sign span:nth-child(3) {
        color: white;
        padding: 4px;
    }
}
`

export default StyledFooter;