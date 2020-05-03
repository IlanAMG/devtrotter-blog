import React from 'react'
import StyledMain from './StyledMain';
import FlecheGoTop from '../FlecheGoTop';

export const Main = ({children}) => {
    return (
        <StyledMain>
            {children}
            {/* <FlecheGoTop /> */}
        </StyledMain>
    )
}
