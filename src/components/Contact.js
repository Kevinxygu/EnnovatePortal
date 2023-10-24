import "./Contact.css";
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div class="contact">
                <h2 class="section-title">Contact Us</h2>
                <div class="section-line"></div>
                <div class="content">
                    <form action="https://formsubmit.co/ennovateubc@gmail.com" method="POST"> 
                        <div id="first">
                            <text>After providing the following information, we'll reach out to you through the provided email!</text>
                        </div>
                        <br></br>
                        <div id="div1">
                            <label for="name">Full Name</label>
                            <input type="text" name="First Name" id="name"  placeholder="Who should we contact?" required></input>
                            <label for="school" id="row1">School</label>
                            <input type="text" name="School" id="school" placeholder="Which high school?" required></input>
                        </div>

                        
                        <div id="div2">
                            <label for="email">Email</label>
                            <input type="email" name="Email" id="row2" placeholder="e.g. example@email.com" required></input>
                            <label for="teacher">Teacher</label>
                            <input type="text" name="Teacher" id="row2" placeholder="Your sponsor teacher" required></input>
                        </div>

                        <br></br>
                        
                        <div id="div3">
                            <label class="textarea-label" for="msg">Message (1000 characters max)</label>
                            <textarea type="text" name="Message" id="msg" placeholder="Enter here..." maxlength="1000" required></textarea>
                        </div>
                        
                        <button type="submit" id="send">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;