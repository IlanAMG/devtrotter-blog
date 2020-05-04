import styled from 'styled-components'

const StyledBio = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid rgb(179, 179, 179);

    .container-desc-bio {
        width: 70%;
    }

    h3 {
        padding: 0 0 10px 10px !important;
        font-size: 1.3em !important;
    }

    p {
        padding: 20px 0 20px 0;
        color: grey;
        line-height: 22px !important; 
        font-size: 0.9em !important;
    }

    .container-social {
        display: flex;
        margin-left: 10px;
    }

    a {
        display: flex;
        padding: 5px !important;
        margin-right: 10px;
        background-color: #0079c6;
        color: white !important;
        font-size: 1em;
        border-radius: 5px;
        transition: 200ms;
        line-height: 10px !important;
    }
    a:hover {
        background-color: #1293BE;
        transition: 200ms
    }
`

export default StyledBio;