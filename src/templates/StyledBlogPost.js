import styled from 'styled-components'

const StyledBlogPost = styled.article`
   	width: 95%;
	word-wrap: break-word;
	border-bottom: 1px solid rgb(179, 179, 179);
	margin-bottom: 30px;
	padding-bottom: 30px;
    
header h1 {
	color: ${({theme}) => theme.title};
}

header span {
	color: ${({theme}) => theme.paragraphe};
}

small {
	color: ${({theme}) => theme.paragraphe};
}
small a {
	color: ${({theme}) => theme.title};
}

section h1 {
	color: ${({theme}) => theme.title};
}

section h2 {
	color: ${({theme}) => theme.title};
}
section h3 {
	color: ${({theme}) => theme.title};
}
section h4 {
	color: ${({theme}) => theme.title};
}
section h5 {
	color: ${({theme}) => theme.title};
}
section h6 {
	color: ${({theme}) => theme.title};
}
section strong {
	font-family: 'Source Sans Pro';
	font-weight: 600;
	color: ${({theme}) => theme.title};
}

section p {
	color: ${({theme}) => theme.title};
}
blockquote p {
	color: #2D2D2D;
}

blockquote{
	display:block;
	background: #fff;
	margin: 10px 50px 10px 50px;
	padding: 20px 20px 20px 30px;
	position: relative;
	font-family: 'Source Sans pro';
	font-size: 1em;
	line-height: 1.2;
	color: #666;
	text-align: justify;
	border-left: 15px solid #3d3d3d;
	border-right: 5px solid #383838;
	-moz-box-shadow: 2px 2px 15px #ccc;
	-webkit-box-shadow: 2px 2px 15px #ccc;
	box-shadow: 2px 2px 15px #ccc;
	}
	blockquote::before{
	content: “201C”; /*Unicode for Left Double Quote*/
	font-family: 'Source Sans Pro';
	font-size: 1em;
	font-weight: bold;
	color: #999;
	position: absolute;
	left: 10px;
	top:5px;
	}
	blockquote::after{
	content: “”;
	}
	blockquote a{
	text-decoration: none;
	background: #eee;
	cursor: pointer;
	padding: 0 3px;
	color: #252525;
	}
	blockquote a:hover{
	color: #666;
	}
	blockquote em{
	font-style: italic;
	}

	ol, ul, li {
		color: ${({theme}) => theme.title};
	}

`

export default StyledBlogPost;