import "./FinalComp.css";
import React from "react";
import ennovateWaiting from "../assets/ennovate-waiting.png";

class FinalComp extends React.Component {
    render() {
        return (
            <div class="final-comp">
                <h2 class="section-title">Final Competition</h2>
                <div class="section-line"></div>
                <div class="content">
    
                <div class = "maintext">
                Final Competition information will be coming out soon!
                </div>

                <div class="ennovate-waiting">
                <img src={ennovateWaiting} alt= "ennovate-waitinglogo" class= "ennovate-waiting" ></img>
                </div>
                
                </div>
            </div>
        )
    }
}

export default FinalComp;