import styled from 'styled-components'

const StyledLastArticle = styled.article`
    max-width: 1100px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .link-last-article {
        max-width: 1100px;
        height: 480px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
    }

    .container-article-right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        max-width: 35%;
        padding: 30px;
        height: 80%;
        width: auto;
        flex-wrap: wrap;
    }

    .container-article-right h6 {
        display: flex;
        padding: 5px;
        background-color: #0079c6;
        color: white;
        font-size: 1.1em;
    }

    .container-article-right .title-lastarticle {
        display: flex;
        color: #2D2D2D;
        font-size: 2.8em;
        letter-spacing: 0.02em;
    }

    .container-article-right p {
        line-height: 24px;
        font-size: 1.3em;
        font-style: italic;
        color: grey;
    }

    .container-article-right small {
        line-height: 24px;
        font-size: 1.1em;
        color: grey;
    }

    .container-article-right small a {
        font-size: 1em;
        color: #2D2D2D;
    }
`

export default StyledLastArticle;