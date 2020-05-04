import React from 'react'

import StyledSectionPropos from './StyledSectionPropos';
import { BioItem } from '../BioItem/BioItem';

export const SectionPropos = ({ pictureIlan, pictureSeb, pictureRemi, ilan, seb, remi}) => {

    return (
        <StyledSectionPropos>
            <h2>Qui sommes-nous ?</h2>
            <BioItem name={seb} picture={pictureSeb} />
            <BioItem name={ilan} picture={pictureIlan} />
            <BioItem name={remi} picture={pictureRemi} />
            <h2>Notre engagement</h2>
            <p className='bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, aspernatur unde! Vitae ipsam unde repellendus voluptate eaque error quibusdam? Asperiores odio aliquam iure doloribus facilis. Non expedita dicta animi? Numquam voluptatibus aut earum laborum, quo alias reprehenderit, recusandae saepe molestias quas iure pariatur placeat iusto obcaecati ducimus fugiat nihil dolorem nisi ex deleniti esse! Cupiditate aperiam perferendis rerum praesentium recusandae repellat unde doloribus facere minima, sed qui reiciendis, dolorum in suscipit deleniti asperiores voluptatem harum officia a eveniet sapiente delectus, eligendi totam quod? Deserunt voluptatibus, fuga esse accusantium cumque ipsa magnam est maiores laudantium consequatur amet dolor tempora aspernatur doloribus doloremque assumenda illo dolores eveniet sit nisi! Incidunt, modi voluptates! Aut atque rem fugit illum quas sequi, quasi reprehenderit quis pariatur eveniet voluptate optio quae voluptatum suscipit dignissimos incidunt perferendis nobis ullam quod ex? Laboriosam mollitia beatae asperiores fuga consequuntur deleniti nostrum placeat eius, ipsum, fugit soluta. Dolorum, molestias odit.</p>
        </StyledSectionPropos>
    )
}
