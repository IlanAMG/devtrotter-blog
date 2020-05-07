import styled from 'styled-components'

const StyledMain = styled.div`
    position: relative;
    top: 65px;
    margin: auto;
    max-width: 1100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 60px;
    min-height: 80vh;

        .fond {
            height: 120vh;
            width: 120vw;
            background-color: ${ ({theme}) => theme.background};
            z-index: -999;
            top: 0;
            position: fixed;
        }
    
    @media (max-width:830px) and (max-height:420px){
        padding-bottom: 0px;
    }
`

export default StyledMain;