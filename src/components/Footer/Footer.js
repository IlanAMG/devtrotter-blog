import React, { useState } from 'react'
import { Link } from "gatsby"
import emailjs from 'emailjs-com'
import { IoMdClose } from 'react-icons/io';

import StyledFooter from './StyledFooter';

export const Footer = () => {
    const [titleForm, setTitleForm] = useState('')
    const [subTitleForm, setSubTitleForm] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [styleContact, setStyleContact] = useState({})
    const [styleWrapper, setStyleWrapper] = useState({ height: '200px' })
    const initial_form = {
        user_name: "",
        user_email: "",
        user_tel: "",
        message: ""
    }

    const [state, setState] = useState(initial_form)

    var service_id = "devtrotter_info_gmail_com";
    var template_id = "template_18JlHl4M_clone";
    var user_id = "user_mIxa9YDPzwWE77Da7IeXu";

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('ici')

        await emailjs.send(service_id, template_id, state, user_id)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setState(initial_form)
        handleClose()
    }

    const handleClick = async (id) => {
        setStyleWrapper({
            height: 'calc(100vh - 65px);',
        })

        setStyleContact({
            height: 'calc(100vh - 185px)',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column'
        })

        if (id === 1) {
            setTitleForm('Nous sommes à votre écoute !')
            setSubTitleForm('Écrivez nous en remplissant ce formulaire ou sur ')
            setShowForm(true)
        } else if (id === 2) {
            setTitleForm('Envie de partager votre passion ?')
            setSubTitleForm('Vous pouvez nous proposer des sujets d\'articles ou devenir créateur de contenu avec nous.')
            setShowForm(true)
        }
    }

    const handleClose = () => {
        setStyleWrapper({
            height: '200px',
        })
        setStyleContact({})
        setShowForm(false)
    }

    return (
        <StyledFooter showForm={false} >
            <div className='wrapper-contact' style={styleWrapper}>
                <div className='container-footer-contact' style={styleContact}>
                    {!showForm ?
                        <>
                            <Link to='/apropos'><span>À propos</span></Link>
                            <span onClick={() => handleClick(1)}>Nous contacter / Travailler avec nous</span>
                            <span onClick={() => handleClick(2)}>Contribuer au blog</span>
                        </>
                        :
                        <div className='container-form'>
                            <div className='wrapper-close' onClick={handleClose}>
                                <IoMdClose />
                            </div>
                            <h3>{titleForm}</h3>
                            <h4>{subTitleForm}<a href='mailto:devtrotter.info@gmail.com'>devtrotter.info@gmail.com</a></h4>
                            <form onSubmit={sendEmail}>
                                <div className='container-input'>
                                    <input onChange={e => setState({ ...state, user_name: e.target.value })} value={state.user_name} placeholder='Nom et prénom' type="text" name="user_name" required />
                                    <input onChange={e => setState({ ...state, user_email: e.target.value })} value={state.user_email} placeholder='Adresse e-mail' type="email" name="user_email" required />
                                    <input onChange={e => setState({ ...state, user_tel: e.target.value })} value={state.user_tel} placeholder='Numéro de téléphone' type="tel" name="user_tel" />
                                </div>
                                <textarea onChange={e => setState({ ...state, message: e.target.value })} value={state.message} placeholder='Votre message ...' name="message" cols="30" rows="10" required></textarea>
                                <div className='wrapper-btn-form'>
                                    <button className='btn btn-white btn-animate'>Envoyer</button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
                <div className='container-footer-sign'>
                    <span>Develop and Designed</span>
                    <span>By Dev'Trotter</span>
                    <span>© Copyright All right reserved {new Date().getFullYear()}</span>
                </div>
            </div>
        </StyledFooter>
    )
}
