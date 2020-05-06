import styled from 'styled-components'

const StyledPrevNext = styled.nav`
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: center;

ul{
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
}

.prev-next {
    font-size: 1.7em;
	color: ${({theme}) => theme.title};
    font-family: 'Oswald';
    margin: 0 20px 0 20px;
}
.prev-next:hover {
    font-size: 1.7em;
    color: rgb(119, 119, 119);
    font-family: 'Oswald';
    margin: 0 20px 0 20px;
}

`

export default StyledPrevNext;