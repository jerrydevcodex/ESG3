import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <body>
    <div class="wrap">
        <Nav></Nav>
    </div>

    
    <div class="contact-section">
        <h1>Contact Us</h1>
        <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
            <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div class="contact-form">
            <h3>Send us a message</h3>
            <form action="submit_contact_form.php" method="POST">
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <input type="text" name="subject" placeholder="Subject" required/>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    <Footer></Footer>
       
</body>
    )
}

export default Contact;