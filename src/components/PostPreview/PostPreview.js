import React from 'react'
import { Link } from 'gatsby';

import StyledPostPreview from './StyledPostPreview'

export const PostPreview = ({ hit }) => {

    return (
        <Link to={ hit.fields.slug }>
            <StyledPostPreview>
                <div className='container-top'>
                    <h2 className='title-lastarticle'>
                        {hit.title}
                    </h2>
                    <h6>
                        {hit.categorie}
                    </h6>
                </div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: hit.excerpt,
                        }}
                    />
                    <small>{hit.date}</small>
            </StyledPostPreview>
        </Link >
    )
}
