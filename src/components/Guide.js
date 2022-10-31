import "./Guide.css";
import React from "react";

class Guide extends React.Component {
    render() {
        return (
            <div class="guide">
                <h2 class="section-title">Portal Guide</h2>
                <div class="section-line"></div>
                <div class="content">
                    <p class="fontBody">The portal here houses everything you need to succeed in creating your Ennovate business plan!
                    <br></br>
                    <br></br>
                    On the sidebar we have the following pages:
                    <ul class="fontBody">
                        <li><b>Portal Guide:</b>This page! It details how best to use the Ennovate portal and also what is on each page. If you ever feel lost, just come back here!</li>
                        <br />
                        <li><b>Contact Us:</b> Please use this page if you have any questions/concerns while you work on your project. After inputting your informatio we will get back to you as soon as we can!</li>
                        <br />
                        <li><b>Program Timeline:</b> This is a comprehensive page that details each of the deadlines for your project, such as selling petiods, payment deadlines, etc.</li>
                        <br />
                        <li><b>Project Resources:</b> These resources are here to help you create your business idea. This includes workshop slides, the main program package, and projects from previous years!</li>
                        <br />
                        <li><b>Final Competition:</b> Submit your business proposals here! This also details information about the final competition day. It will open that day, housing information such as judging room information, rubrics and the itinerary!</li>
                    </ul>
                        <p class="fontBody"> Best of luck! Please reach out to 
                        <a class="color:#800000;" href="mailto:admin@ennovateubc.org"> admin@ennovateubc.org for any further questions or concerns!</a>
                        </p>
                    </p>
                </div>
            </div>
        )
    }
}

export default Guide;