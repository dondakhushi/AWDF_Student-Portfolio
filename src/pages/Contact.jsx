import { useState } from 'react';
import "./Contact.css"

function Contact() {
  const [message, setMessage] = useState('');
  const [showTip, setShowTip] = useState(false);

  return (
    <div>
      <h2>Contact Me</h2>

      <button type="button" onClick={() => setShowTip((prev) => !prev)}>
        {showTip ? 'Hide Tip' : 'Show Tip'}
      </button>

      {showTip && (
        <p>
          Tip: Type below and watch the character count update live.
        </p>
      )}

      <div>
        <label htmlFor="message">Your Message:</label>
        <br />

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          cols={40}
        />

        <p>Characters Typed: {message.length}</p>

        <p>Live Preview: {message || '(Nothing typed yet)'}</p>
      </div>
    </div>
  );
}

export default Contact;