import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image';

import StyledBioItem from './StyledBioItem';

export const BioItem = ({ name, picture }) => {
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
    }, [])

    return (
        <StyledBioItem>
            <div className='container-desc-bio'>
                <h3>{name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione consequuntur culpa dolorem soluta nisi fugiat assumenda, et voluptas a doloremque perspiciatis fugit porro quod voluptates quas minima, in eligendi unde sit ad quaerat tenetur. Sed accusamus modi dignissimos eius rerum!</p>
                <div className='container-social'>
                    {social &&
                        social.map((item, i) => {
                            return (
                                <a target='_blank' href={item.url}>{item.titre}</a>
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
