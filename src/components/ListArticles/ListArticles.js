import React from 'react'

import StyledListArticles from './StyledListArticles';

export const ListArticles = ({ children }) => {
    return (
        <StyledListArticles>
            {children}
        </StyledListArticles>
    )
}
