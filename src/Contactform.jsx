import React from 'react'

export default function Contactform() {
        return (
        <div className='contact-form-content'>
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="53b447ec-2bd5-4b45-a5b8-3bf2a6e6e194"></input>
                <div className='name-container'>
                    <input type='text' name='firstname' placeholder='First Name' required ></input>
                    <input type='text' name='lastname' placeholder='Last Name' required></input>
                </div>
                <input type='text' name='email' placeholder='Email' required></input>
                <textarea type="text" name='message' placeholder='Message' rows={3} required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
