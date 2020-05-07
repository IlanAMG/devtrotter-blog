import React from 'react'

import StyledMenuFixedRight from './StyledMenuFixedRight';

export const MenuFixedRight = ({ styleFixedIndex }) => {
    return (
        <div className="wrapper-container-index-infos-right">
          <StyledMenuFixedRight style={styleFixedIndex} className='container-index-infos-right'>
            <h2>Tu veux être tenu au courant des nouveaux articles ?</h2>
            <div className='separator'></div>
            <p>Si vous avez appris des choses avec nos articles, pensez à vous inscrire à la newsletter de Dev Trotter, où nous vous envoyons dès leurs sorties les nouveaux articles et les nouvelles vidéos sur youtube. Passion à volonté !</p>
            <form name='newsletter' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
                <label>Votre adresse Email :
                  <input placeholder='Votre email...' type="email" name="email" id="email" required />
                </label>
                <input type='hidden' name='form-name' value='newsletter'/>
                <input type='hidden' name='bot-field' />
                <div className='wrapper-btn-form'>
                  <button className='btn btn-white btn-animate'>Enregistrez-moi !</button>
                </div>
            </form>
            <h2>Notre blog est communautaire !</h2>
            <div className='separator'></div>
            <p>Notre engagement est de fonder une communauté autour du digital en général. Nous sommes ouvert à tous les sujets dans ce domaine, c'est pourquoi vous pouvez<a href='mailto:devtrotter.info@gmail.com'> nous contacter </a>pour contribuer au blog ou à notre <a rel="noopener noreferrer" target="_blank" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA'>chaîne youtube</a>.</p>
          </StyledMenuFixedRight>
        </div>
    )
}
