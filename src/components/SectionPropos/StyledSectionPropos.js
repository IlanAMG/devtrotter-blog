import styled from 'styled-components'

const StyledSectionPropos = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
        text-transform: uppercase;
        font-size: 2.4em;
        font-weight: bold;
        color: ${({theme}) => theme.title};
    }

    .bio {
        padding: 30px 0 60px 0;
        color: ${({theme}) => theme.paragraphe};
        line-height: 26px;
        font-size: 1.1em;
    }
    @media screen and (max-width: 570px) {
        p {
            font-size: 0.9em !important;
        }
    }
    @media (max-width:830px) and (max-height:420px){
        p {
            margin-bottom: 50px !important;
        }
}
`

export default StyledSectionPropos;