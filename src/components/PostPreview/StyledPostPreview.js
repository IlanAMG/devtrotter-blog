import styled from 'styled-components'

const StyledPostPreview = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.11);
    transition: 300ms;

    &:hover {
        background-color: rgba(0,0,0,0.05);
        transition: 300ms;
    }

    .container-top {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: 1.1em;
        color: #2D2D2D;
    }

    h6 {
        display: flex;
        padding: 5px;
        background-color: #0079c6;
        color: white;
        font-size: 0.7em;
    }
    a {
        text-decoration: none;
    }

    p {
        font-size: 0.8em;
        color: grey;
        font-style: italic;
        padding: 5px 0 5px 0;
        line-height: 1em;
    }
    small {
        font-size: 0.7em;
        color: #2D2D2D;
    }
`

export default StyledPostPreview;