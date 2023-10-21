import "./Timeline.css";
import React from "react";

class Timeline extends React.Component {
    render() {
        return (
            <div class="timeline">
                <h2 class="section-title">Program Timeline</h2>
                <div class="section-line"></div>

                
                <div class="content">

                    <div class="program" id="sellingPeriod">
                            <div class="program-date">
                                <h2 class="timeline-month">Nov</h2>
                                <h2 class="timeline-date">13</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Finalize Business Idea</h2>
                            <p class="program-desc">Make sure to get your idea in to us!</p>    
                            </div>
                            </div>    

                    <div class="program" id="universitySeminar">
                            <div class="program-date">
                                <h2 class="timeline-month">Nov</h2>
                                <h2 class="timeline-date">17</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period Starts</h2>
                            <p class="program-desc">The start of your selling period! Feel free to start going out to sell!</p>    
    
                            </div>
                        </div>   
                        
                        <div class="program" id="sellingPeriod2">
                            <div class="program-date">
                                <h2 class="timeline-month">Jan</h2>
                                <h2 class="timeline-date">12</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period Ends</h2>
                            <p class="program-desc"> The end of your selling period! You cannot sell your products anymore after this date.</p>    
    
                            </div>
                        </div>   

                    <div class="program" id="rsvp">
                        <div class="program-date">
                            <h2 class="timeline-month">Jan</h2>
                            <h2 class="timeline-date">27</h2>
                        </div>    
        
                        <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Microloan Payback</h2>
                        <p class="program-desc">Deadline to pay the Microloan!</p>
   
                        </div>
                        </div> 

                    <div class="program" id="microloan">
                        <div class="program-date">
                            <h2 class="timeline-month">Jan</h2>
                            <h2 class="timeline-date">27</h2>
                        </div>

                            <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Final Competition</h2>
                        <p class="program-desc">Get ready for Final Comp!! See you all at UBC :)</p>    
   
                        </div>
                        </div>
                
                </div>

                
            </div>   
                      

            
        )
    }
}

export default Timeline;