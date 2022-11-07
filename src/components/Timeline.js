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
                                <h2 class="timeline-month"> Nov</h2>
                                <h2 class="timeline-date">05</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period</h2>
                            <p class="program-desc">Selling period begins!</p>    
    
                            </div>
                            </div>    

                    <div class="program" id="universitySeminar">
                            <div class="program-date">
                                <h2 class="timeline-month"> Nov</h2>
                                <h2 class="timeline-date">12</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title"> University Seminar</h2>
                            <p class="program-desc"> University seminar at UBC Sauder! Come learn tips and tricks about applying to universities</p>    
    
                            </div>
                        </div>   
                        
                        <div class="program" id="sellingPeriod2">
                            <div class="program-date">
                                <h2 class="timeline-month"> Jan</h2>
                                <h2 class="timeline-date">09</h2>
                            </div>

                                <div class="program-line"></div>
                            <div class= "program-text">
                            <h2 class="program-title">Selling Period</h2>
                            <p class="program-desc"> The end of your selling period! You cannot sell your products anymore after this date. </p>    
    
                            </div>
                        </div>   

                    <div class="program" id="rsvp">
                        <div class="program-date">
                            <h2 class="timeline-month"> Jan</h2>
                            <h2 class="timeline-date">18</h2>
                        </div>    
        
                        <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Final Competition RSVP</h2>
                        <p class="program-desc">You will need to RSVP for final competition, and we'll update that for you here when it gets closer</p>
   
                        </div>
                        </div> 

                    <div class="program" id="microloan">
                        <div class="program-date">
                            <h2 class="timeline-month"> Jan</h2>
                            <h2 class="timeline-date">20</h2>
                        </div>

                            <div class="program-line"></div>
                        <div class= "program-text">
                        <h2 class="program-title">Microloan Repayment</h2>
                        <p class="program-desc">Don't forget to pay your microloans! The full amount is $100 <br />loan + $50 program fee!</p>    
   
                        </div>
                        </div>

                    <div class="program" id="businessPlan">
                        <div class="program-date">
                            <h2 class="timeline-month"> Jan</h2>
                            <h2 class="timeline-date">20</h2>
                        </div>

                        <div class="program-line" style={{backgroundColor: "#303030"}}></div>
                        <div class= "program-text">
        
                        <h2 class="program-title">Business Plan Submission</h2>
                        <p class="program-desc"> Please submit your final competition slides and your <br /> business plans in PDF form under the "Final Competition"<br /></p>
   
                        </div>
                        </div>
                    
                    

                    <div class="program" id="finComp">
                        <div class="program-date">
                            <h2 class="timeline-month"> Jan</h2>
                            <h2 class="timeline-date">21</h2>
                        </div>

                        <div class="program-line" style={{backgroundColor: "#303030"}}></div>
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