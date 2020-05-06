import React from 'react'
import StyledMain from './StyledMain';

export const Main = ({children}) => {
    return (
        <StyledMain>
            <div className='fond'></div>
            {children}
        </StyledMain>
    )
}
