import './Contact.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {

  const form = useRef(null)

  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMP_ID, form.current, process.env.REACT_APP_USER_ID)
      .catch(error => console.log(error))
    form.current.reset()
    window.alert('Messege was sent')
  }

  return (
    <div id="contact">
      <h1>CONTACT</h1>
      <form ref={form} id='contact-form' onSubmit={handelSubmit}>
        <input type="text" name='from_name' id='from_name' placeholder="Name"/>
        <input type="text" name="email" id="email" placeholder="Email"/>
        <input type="text" name="subject" id="subject" placeholder="Subject"/>
        <textarea name="message" id="message" cols="30" rows="30" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact