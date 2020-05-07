import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image';

import StyledBioItem from './StyledBioItem';

export const BioItem = ({ name, picture, desc }) => {
    const [social, setSocial] = useState([])

    useEffect(() => {
        if (name === 'Ilan Amzallag') {
            setSocial([
                {
                    titre: 'Portefolio',
                    url: 'https://ilanamzallag.com'
                },
                {
                    titre: 'Github',
                    url: 'https://github.com/IlanAMG'
                },
                {
                    titre: 'Linkedin',
                    url: 'https://www.linkedin.com/in/ilan-amzallag-b4a259101/'
                }
            ])
        } else if (name === 'Sébastien Chapuy') {
            setSocial([
                {
                    titre: 'Github',
                    url: 'https://github.com/DevTrotter'
                },
                {
                    titre: 'Linkedin',
                    url: 'https://www.linkedin.com/in/s%C3%A9bastien-chapuy-a6324bb5/'
                }
            ])
        } else if (name === 'Rémi Neret') {
            setSocial([
                {
                    titre: 'Linkedin',
                    url: 'https://www.linkedin.com/in/remineret/'
                }
            ])
        }
                        // eslint-disable-next-line
    }, [])

    return (
        <StyledBioItem>
            <div className='container-desc-bio'>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className='container-social'>
                    {social &&
                        social.map((item, i) => {
                            return (
                                <a key={i} rel="noopener noreferrer" target='_blank' href={item.url}>{item.titre}</a>
                            )
                        })
                    }
                </div>
            </div> 
            <Img
                style={{
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                fixed={picture}
                alt='profil'
            />
        </StyledBioItem>
    )
}
