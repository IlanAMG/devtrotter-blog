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
        color: #2D2D2D;
    }

    .bio {
        padding: 30px 0 60px 0;
        color: grey;
        line-height: 26px;
        font-size: 1.1em;
    }
`

export default StyledSectionPropos;