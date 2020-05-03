import React, { useEffect, useState } from 'react'

const FlecheGoTop = () => {
    const [isVisible, setVisible] = useState(false)
    const handleGoTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }   

    const scrollDistance = () => {
        if (window.pageYOffset > 100) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('scroll', scrollDistance, { passive: true });
        }, 100)
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', scrollDistance);
        };
    }, []);

    return (
        <div>
            <button onClick={handleGoTop} id="cRetour" className={!isVisible ? "cInvisible" : "cVisible"} />
        </div>
    )
}

export default FlecheGoTop
