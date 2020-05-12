import styled from 'styled-components'

const StyledPostPreview = styled.div`
    padding-bottom: 10px !important;
    border-bottom: 1px solid rgba(0,0,0,0.11) !important;
    transition: 300ms !important;

    &:hover {
        background-color: rgba(0,0,0,0.05);
        transition: 300ms !important;
    }

    .container-top {
        display: flex;
        justify-content: space-between !important;
    }

    h2 {
        font-size: 1.1em !important;
        color: #2D2D2D !important;
    }

    h6 {
        display: flex !important;
        padding: 5px !important;
        background-color: #0079c6 !important;
        color: white !important;
        font-size: 0.7em !important;
    }
    a {
        text-decoration: none !important;
    }

    p {
        font-size: 0.8em !important;
        color: grey !important;
        font-style: italic !important;
        padding: 5px 0 5px 0 !important;
        line-height: 1em !important;
    }
    small {
        font-size: 0.7em !important;
        color: #2D2D2D !important;
    }
`

export default StyledPostPreview;