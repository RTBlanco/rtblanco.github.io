import './Contact.css';
// could create a back end to be able to send the info using a free hosting service
// since its not going to matter if its fast or not 
const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT</h1>
      <form id='contact-form'>
        <input type="text" name='from' id='from' placeholder="From"/>
        <input type="text" name="subject" id="subject" placeholder="Subject"/>
        <textarea name="message" id="message" cols="30" rows="30" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact