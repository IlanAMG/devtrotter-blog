import styled from 'styled-components'

const StyledLastArticle = styled.article`
    max-width: 1100px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;

    .link-last-article {
        max-width: 1100px;
        height: 480px;
        display: flex;
        align-items: center;
        justify-content: space-around; 
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
        min-width: 320px;
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
        color: ${({theme}) => theme.title};
        font-size: 2.8em;
        letter-spacing: 0.02em;
    }

    .container-article-right p {
        line-height: 24px;
        font-size: 1.3em;
        font-style: italic;
        color: ${({theme}) => theme.paragraphe};
    }

    .container-article-right small {
        line-height: 24px;
        font-size: 1.1em;
        color: ${({theme}) => theme.paragraphe};
    }

    .container-article-right small a {
        font-size: 1em;
        color: ${({theme}) => theme.title};
    }

    @media screen and (max-width: 850px) {
        height: auto;
        padding: 0px;

        .link-last-article {
            height: auto;
		    flex-direction: column;
        }
        .container-article-right {
            max-width: 85%;
        }
        p {
            padding: 20px 0 20px 0;
        }
        .container-article-right h6 {
            margin-bottom: 10px !important;
        }
	}
`

export default StyledLastArticle;