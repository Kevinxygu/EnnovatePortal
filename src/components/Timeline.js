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
                                <h2 class="timeline-month">Mar</h2>
                                <h2 class="timeline-date">17</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Idea Submission</h2>
                            <p class="program-desc">Submit your ideas to your respective PAs!</p>    
                            </div>
                            </div>    

                    <div class="program" id="universitySeminar">
                            <div class="program-date">
                                <h2 class="timeline-month">Mar</h2>
                                <h2 class="timeline-date">18</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period Starts</h2>
                            <p class="program-desc">The start of your selling period! Feel free to start going out to sell!</p>    
    
                            </div>
                        </div>   
                        
                        <div class="program" id="sellingPeriod2">
                            <div class="program-date">
                                <h2 class="timeline-month">May</h2>
                                <h2 class="timeline-date">08</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period</h2>
                            <p class="program-desc"> The end of your selling period! You cannot sell your products anymore after this date. </p>    
    
                            </div>
                        </div>   

                    <div class="program" id="rsvp">
                        <div class="program-date">
                            <h2 class="timeline-month">May</h2>
                            <h2 class="timeline-date">13</h2>
                        </div>    
        
                        <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">First Draft of Slide Deck</h2>
                        <p class="program-desc">You will need to submit your first draft of your deck to your PAs.</p>
   
                        </div>
                        </div> 

                    <div class="program" id="microloan">
                        <div class="program-date">
                            <h2 class="timeline-month">May</h2>
                            <h2 class="timeline-date">19</h2>
                        </div>

                            <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Slide Deck + Business Plan</h2>
                        <p class="program-desc">Final deadline to submit your slide deck and business plan! Get practicing for final comp!</p>    
   
                        </div>
                        </div>

                    <div class="program" id="businessPlan">
                        <div class="program-date">
                            <h2 class="timeline-month">May</h2>
                            <h2 class="timeline-date">21</h2>
                        </div>

                        <div class="program-line"></div>
                        <div class= "program-text">
        
                        <h2 class="program-title">Final Competition</h2>
                        <p class="program-desc">D-DAY for Final Competition. See you all at Sauder!</p>
   
                        </div>
                        </div>
                    
                
                </div>

                
            </div>   
                      

            
        )
    }
}

export default Timeline;