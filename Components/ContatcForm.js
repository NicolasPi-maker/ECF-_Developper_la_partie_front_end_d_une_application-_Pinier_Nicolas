import React from 'react'

const ContatcForm = () => {
  return (
    <div>
        <form name='contact' method='POST' data-netlify='true'>
            <div>
                <label htmlFor='lastName'>Nom</label>
                <input type='text' name='lastName' id='lastName' required/>

                <label htmlFor='firstName'>Prénom</label>
                <input type='text' name='firstName' id='firstName'/>
            </div>
            <label htmlFor='email'>email</label>
            <input type='email' name='email' id='email' required/>

            <label htmlFor='phoneNumber'>Téléphone</label>
            <input type='tel' name='phoneNumber' id='phoneNumber'/>

            <div>
                <label htmlFor='subject'>Objet</label>
                <input type='text' name='subject' id='subject'/>

                <label htmlFor='message'>Méssage</label>
                <input type='textarea' name='message' id='message'/>
            </div>

            <button type='submit'>Envoyer</button>
        </form>
    </div>
  )
}

export default ContatcForm