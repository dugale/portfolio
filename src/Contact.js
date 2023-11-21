import { useState } from "react";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Phone (optional):</label>
                        <input 
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
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
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    );
}

export default Contact