import "./Timeline.css";
import React from "react";

class Timeline extends React.Component {
    render() {
        return (
            <div class="timeline">
                <h2 class="section-title">Program Timeline</h2>
                <div class="section-line"></div>

                
                <div class="content">
                   
                    <div class="program" id="microloan">
                        <div class="program-date">
                            <h2 class="timeline-month"> January</h2>
                            <h2 class="timeline-date">08</h2>
                        </div>



                            <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Microloan Repayment</h2>
                        <p class="program-desc">Don't forget to pay your microloans! The full amount is $100 <br />loan + $50 program fee!</p>    
   
                        </div>
                        </div>






                    <div class="program" id="businessplan">
                        <div class="program-date">
                            <h2 class="timeline-month"> January</h2>
                            <h2 class="timeline-date">12</h2>
                        </div>
            

                        <div class="program-line"></div>
                        <div class= "program-text">
        
                        <h2 class="program-title">Business Plan Submission</h2>
                        <p class="program-desc"> Please submit your final competition slides and your <br /> business plans in PDF form under the "Final Competition"<br /></p>
   
                        </div>
                        </div>
                    
                    <div class="program" id="rsvp">
                        <div class="program-date">
                            <h2 class="timeline-month"> January</h2>
                            <h2 class="timeline-date">18</h2>
                        </div>    
        
                        <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Final Competition RSVP</h2>
                        <p class="program-desc">RSVP with this form <a href="url" target="_blank">here</a></p>
   
                        </div>
                        </div>
                        







                        

                    <div class="program" id="fincomp">
                        <div class="program-date">
                            <h2 class="timeline-month"> January</h2>
                            <h2 class="timeline-date">29</h2>
                        </div>

                        <div class="program-line"></div>
                        <div class= "program-text">
        
                        <h2 class="program-title">Final Competition Day! </h2>
                        <p class="program-desc">Final competitiond day! Get ready to present, business <br /> casual and monitor the "Final Competition" tab</p>
   
                        </div>
                        </div>
                        </div>

                
            </div>   
                      

            
        )
    }
}

export default Timeline;