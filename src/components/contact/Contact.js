import './Contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT</h1>
      <form id='contact-form'>
        <input type="text" name='from' id='from' placeholder="From"/>
        <input type="text" name="subject" id="subject" placeholder="Subject"/>
        <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Message"></textarea>
      </form>
    </div>
  )
}

export default Contact