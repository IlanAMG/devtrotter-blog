import React from 'react'

import StyledMenuFixedRight from './StyledMenuFixedRight';

export const MenuFixedRight = ({fixedIndex, styleFixedIndex}) => {
    return (
        <div className="wrapper-container-index-infos-right">
          <StyledMenuFixedRight style={fixedIndex ? styleFixedIndex : null} className='container-index-infos-right'>
            <h2>Tu veux être tenu au courant des nouveaux articles ?</h2>
            <div className='separator'></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sequi distinctio architecto. Esse corrupti hic iure praesentium. Iste obcaecati ipsum eveniet asperiores incidunt vitae, laudantium nihil. Quos consequatur hic nisi?</p>
            <form>
                <input type="email" name="email" id="email" required />
                <label><button>Enregistrez-moi !</button></label>
            </form>
            <h2>Notre blog est communautaire !</h2>
            <div className='separator'></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sequi distinctio architecto. Esse corrupti hic iure praesentium. Iste obcaecati ipsum eveniet asperiores incidunt vitae, laudantium nihil. Quos consequatur hic nisi?</p>
          </StyledMenuFixedRight>
        </div>
    )
}
