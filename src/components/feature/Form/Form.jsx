import React from 'react';
import './_Form.scss';
import FormHead from './FormHead';

const Form = () => {
    return (
        <>
        <FormHead />

        <div className="form__wrapper">
            <form className="form">
                <h1 className="form__title">Subscribe</h1>
                <label htmlFor="inputFirstName"></label>
                <input type="text" id="inputFirstName" className="form--control" placeholder="First Name" required="" autofocus=""></input>
                <label htmlFor="inputLastName"></label>
                <input type="text" id="inputLastName" className="form--control" placeholder="Last Name" required=""></input>
                <label htmlFor="inputEmail"></label>
                <input type="email" id="inputEmail" className="form--control" placeholder="Email Address" required=""></input>
                <textarea id="inputMessage" className="form--control" placeholder="Leave us a message!"></textarea>
                <button className="form--button" id="submitButton" type="submit">Submit</button>
                <p className="form__copyright">© Slotify.io</p>
            </form>
        </div>
        </>
    )
}

export default Form;