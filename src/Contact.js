import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState({
        value: "",
        isTouched: false
    });
    const [phone, setPhone] = useState({
        value: "",
        isTouched: false
    });
    const [message, setMessage] = useState("");

    const EmailErrorMessage = () => {
        return (
            <p>Please enter a valid email address</p>
        )
    }

    const PhoneErrorMessage = () => {
        return (
            <p>Please enter a valid phone number</p>
        )
    }

    const validateEmail = (emailAddress) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress);
    }

    const validatePhone = (phoneNumber) => {
        if (!phoneNumber) {
            return true;
        }
        return /^[0-9()+-\s]+$/i.test(phoneNumber);
    }

    const getIsFormValid = () => {
        return (
            name &&
            validateEmail(email.value) &&
            validatePhone(phone.value) &&
            message
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    return (
        <>
            <h1>Contact</h1>
            <p>
                Please fill out the following form if you would like to contact me.
            </p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label>Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name" 
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email.value}
                            onChange={(e) => {
                                setEmail({...email, value: e.target.value});
                            }}
                            onBlur={() => {
                                setEmail({...email, isTouched: true})
                            }}
                        />
                        {email.isTouched && !validateEmail(email.value) ? (
                            <EmailErrorMessage />
                        ) : null}
                    </div>
                    <div>
                        <label>Phone (optional):</label>
                        <input 
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            value={phone.value}
                            onChange={(e) => {
                                setPhone({...phone, value: e.target.value})
                            }}
                            onBlur={() => {
                                setPhone({...phone, isTouched: true})
                            }}
                        />
                        {phone.isTouched && !validatePhone(phone.value) ? (
                            <PhoneErrorMessage />
                        ) : null}
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>Submit</button>
                </fieldset>
            </form>
        </>
    );
}

export default Contact