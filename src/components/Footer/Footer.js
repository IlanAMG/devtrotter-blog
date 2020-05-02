import React from 'react'

import StyledFooter from './StyledFooter';

export const Footer = () => {
    return (
        <StyledFooter>
            <div className='container-footer-contact'>
                <span>À propos</span>
                <span>Nous contacter / Travailler avec nous</span>
                <span>Contribuer au blog</span>
            </div>
            <div className='container-footer-sign'>
                <span>Develop and Designed</span>
                <span>By Dev'Trotter</span>
                <span>© Copyright All right reserved {new Date().getFullYear()}</span>
            </div>
        </StyledFooter>
    )
}
