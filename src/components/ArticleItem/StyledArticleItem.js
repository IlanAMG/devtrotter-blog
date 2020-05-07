import styled from 'styled-components'

const StyledArticleItem = styled.article`
    width: auto;
    height: 225px;
    margin-bottom: 50px;
    padding-left: 10px;

    @media screen and (max-width: 560px) {
        height: auto;
        a {
            height: auto;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center;
            align-items: center;
        }
        .container-article-right {
            padding: 10px !important;
            align-items: center !important;
        }
        small {
            text-align: center;
        }
        p {
            padding: 15px;
            text-align: center;
        }
        .title-lastarticle {
            text-align: center !important;
            padding: 10px !important;
        }
    }

    .container-article-right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding-right: 20px;
        height: 100%;
        width: auto;
    }

    .container-article-right h6 {
        display: flex;
        padding: 5px;
        background-color: #0079c6;
        color: white;
        font-size: 1em !important;
    }

    .container-article-right .title-lastarticle {
        display: flex;
        color: ${({theme}) => theme.title};
        font-size: 2em !important;
        letter-spacing: 0.02em;
    }

    .container-article-right p {
        line-height: 24px;
        font-size: 1.2em !important;
        font-style: italic;
        color: ${({theme}) => theme.paragraphe};
    }

    .container-article-right small {
        line-height: 24px;
        font-size: 1em !important;
        color: ${({theme}) => theme.paragraphe};
    }

    .container-article-right small a {
        font-size: 1em !important;
        color: ${({theme}) => theme.title};
    }
`

export default StyledArticleItem;