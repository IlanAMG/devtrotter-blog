import styled from 'styled-components'

const StyledBioItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .container-desc-bio {
        width: 70%;
    }

    h3 {
        font-size: 1.9em;
        color: ${({theme}) => theme.title};
    }

    p {
        padding: 20px 0 20px 0;
        color: ${({theme}) => theme.paragraphe};
        line-height: 24px;
        font-size: 1.1em;
    }

    .container-social {
        display: flex;
        
    }

    a {
        display: flex;
        padding: 5px;
        margin-right: 10px;
        background-color: #0079c6;
        color: white;
        font-size: 1em;
        border-radius: 5px;
        transition: 200ms
    }
    a:hover {
        background-color: #1293BE;
        transition: 200ms
    }
`

export default StyledBioItem;