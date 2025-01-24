import React, { useState } from "react";

const AskUsPage: React.FC = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message Sent: ${message}`);
        setMessage("");
    };

    return (
        <div>
            <h1>Ask Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        required
                    />
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default AskUsPage;
