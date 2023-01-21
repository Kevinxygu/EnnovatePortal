import "./FinalComp.css";
import React from "react";
import ennovateWaiting from "../assets/ennovate-waiting.png";
import FinalCompRubric from "../assets/FinalCompRubric.png";

class FinalComp extends React.Component {
    constructor(props) {
        super(props);

    }
    /*exit(){
        POPUP.style.display = 'none';
    }
    message() {
        
    }
/*
    <script type = "text/javascript">
    const realFileBtn = document.getElementById("file-upload");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");

    const realFileBtn2 = document.getElementById("file-upload2");
    const customBtn2 = document.getElementById("custom-button2");
    const customTxt2 = document.getElementById("custom-text2");
    const POPUP = document.getElementById("popup");

    const exitBtn = document.getElementById("exitBtn");
    function exit(){
        POPUP.style.display = 'none';
    }

    function  message(){
        var file1 = document.getElementById("file-upload");
        var file2 = document.getElementById("file-upload2");
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');

        if(file1.value === '' || file2.value === '' ){
            danger.style.display = 'block'; }
                else{
            setTimeout(() => {
            file1.value = '';
            file2.value = ''; }, 400);

            POPUP.style.display = 'block';
                }


        setTimeout(() => {
        danger.style.display = 'none';
        }, 1200);
}
    customBtn.addEventListener("click", function() {
    realFileBtn.click();
    });
    customBtn2.addEventListener("click", function() {
    realFileBtn2.click();
    });

    realFileBtn.addEventListener("change", function() {
        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
        customTxt.innerHTML = "No file chosen, yet.";}});
    
    realFileBtn2.addEventListener("change", function() {
        if (realFileBtn2.value) {
            customTxt2.innerHTML = realFileBtn2.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
        customTxt2.innerHTML = "No file chosen, yet.";}});
        

</script>
*/
    render() {
        const waitingPage = (
        <div class="final-comp">
            <h2 class="section-title">Final Competition</h2>
            <div class="section-line"></div>
                <div class="content">
                    
                <div class = "maintext">Final Competition information will be coming out soon!
                </div>

                <div class="maintext">Please RSVP with this <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1dYmFP581K-R9ms1H245_7BlcX-8m7iBB9W3vxdFBUrtyyw/viewform?usp=sf_link" style={{color: "#000000", fontWeight: "600"}}><p style={{color: 
                    "#000000", display: "inline"}}>link</p></a></div>

        <div class="ennovate-waiting">
        <img src={ennovateWaiting} alt= "ennovate-waitinglogo" class= "ennovate-waiting" ></img>

        </div>
        
        </div>
    </div>
        )

        const submission = (
            <div id="file-submission">
                <div id ="h1desc">
                    <h1 >Please RSVP with this link, then submit your business plan and final competition slides below:<br id = "h1desc" />
                    <strong>MAKE SURE THEY ARE BOTH IN PDF FORM</strong><br />
                    </h1>
                </div>
                <form>
                    <fieldset class = "file">
                    <div id="afile">
                    <div class = "required">
                        <p id = "filedescription">Business Proposal</p>
                        <p class="requirementText"> 	&nbsp; *required</p>
                    </div>
                        <input id="file-upload" name="FinalsSlides"  type="file" hidden="hidden" required/>
                        <span id = "custom-text">No File Uploaded Yet</span>
                        <button type = "button" id = "custom-button">Choose file </button>
                    </div>

                    <div id="afile">
                        <div class = "required">
                            <p id = "filedescription">Final Competition Slides</p>
                            <p class="requirementText"> 	&nbsp; *required</p>
                        </div>
        
                        <input id="file-upload2" name="FinalsSlides"  type="file" hidden="hidden" required/>
                        <span id = "custom-text2">No File Uploaded Yet</span>
                        <button type = "button" id = "custom-button2">Choose file </button>
                    </div>
                        <div class = "submitinput">
                        <button class = "submit" type = "submit" /*onclick="message(); return false;"*/>Submit</button>
                            <div class="message">
                                 <div class = "popupmsg" id = "popup">
                                    <img src = "ENNOVATE-W.png" class = "ennovate-logo"></img>
                                    <p class = "popuptxt">Your files have been succesfully submitted!<br />Good Luck!<br /></p>                            
                                    <button id = "exitBtn" class = "exit" type = "submit" /*onclick = "exit();"*/>
                                    </button>
                                 </div>
                                <div class="danger" id="danger">Fields Can't be Empty!</div>
                            </div>
                        </div>
                    
                    </fieldset>
                </form>
            </div>
        )

        const panelists = (
            <div class="panelists">

                <div class="penlist">
                    <img class = "judgeimg" src = "FinalCompRubric.png"></img>
                    <p class= "judgename">Big Guy</p>
                </div>
                <div class="penlist">
                    <img class = "judgeimg" src = "FinalCompRubric.png"></img>
                    <p class= "judgename">Big Guy</p>
                </div>
                <div class="penlist">
                    <img class = "judgeimg" src = "FinalCompRubric.png"></img>
                    <p class= "judgename">Big Guy</p>
                </div>
                <div class="penlist">
                    <img class = "judgeimg" src = "FinalCompRubric.png"></img>
                    <p class= "judgename">Big Guy</p>
                </div>


            </div>
        )

        // Change Rules 3 and 4 to adapt it to in-person

        const livePage = (
            <div class="final-comp">
            <h2 class="section-title">Final Competition</h2>
            <div class="section-line"></div>
                <div class="content">
                <div class="body">
            
   
                <h1 id="itinerarytitle">Itinerary</h1>
                    <div id="itinerary">
                    <div id="schedule-timeline">
                    <div id="bluebar"></div>
                    <div id = "dots">
                    <div class="outline" id="two"><div class="dot" id="activity1"></div></div>
                    <div class="outline" id="three"><div class="dot" id="activity2"></div></div>
                    <div class="outline" id="four"><div class="dot" id="activity3"></div></div>
                    <div class="outline" id="five"><div class="dot" id="activity4"></div></div>
                    <div class="outline" id="six"><div class="dot" id="activity5"></div></div>
                    <div class="outline" id="seven"><div class="dot" id="activity6"></div></div>
                    </div>
                    </div>

                    <div class="schedule-description">
                    <div class="description-item"><h1>12:45 PM - 1:00PM</h1><p class="description">Registration</p></div>
                    <div class="description-item"><h1>1:00 PM - 1:30 PM</h1><p class="description">Opening Ceremony</p></div>
                    <div class="description-item"><h1>1:30 PM - 3:00 PM</h1><p class="description">League Presentations</p></div>
                    <div class="description-item"><h1>3:00 PM - 3:30 PM</h1><p class="description">Judge Deliberation + Kahoot!</p></div>
                    <div class="description-item"><h1>3:30 PM - 4:45 PM</h1><p class="description">Finalist Presentation</p></div>
                    <div class="description-item"><h1>4:45 PM - 5:00 PM</h1><p class="description">Closing Celebration</p></div>

                    </div>
                    </div>

                    <div class="league-information">
                    <h1 class="leagueheading">League Information</h1>
                    <h4 id="leaguename">League 1:</h4>
                    <ul>
                        <li>School 1</li>
                        <li>School 2</li>
                    </ul>

                    <h4 id="leaguename">League 2:</h4>
                        <ul>
                            <li>School 1</li>
                            <li>School 2</li>
                        </ul>

                    <h4 id="leaguename">League 3:</h4>
                    <ul>
                        <li>School 1</li>
                        <li>School 2</li>
                    </ul>

                    </div>

                    <h1 class="leagueheading">Judging Rubric</h1>
                    <div class="judging-rubric">
                    <div id="rubriclink">
                        <a href="https://drive.google.com/file/d/1wJBRjIBb5sazzDiRfp0-zde3bYIlw73m/view?usp=sharing">
                            <img class ="rubricimg" src={FinalCompRubric}></img>
                        </a>
                    </div>
                    <h1 class="leagueheading">Judging Rules</h1>
                    <div class="rubricguidelines">
                        <p class="judgingRules">
                            <strong>1.</strong> All presentations will be cut off at the 7-MINUTE MARK. No additional time will be permitted.<br /><br />

                            <strong>2.</strong> All presentations will be followed by a 3-MINUTE Q&A period. Only judges are permitted to ask questions.<br /><br />

                            <strong>3.</strong> Please keep your cameras on and have your mics muted when you are not presenting.<br /><br />

                            <strong>4.</strong> Have one rep with the slides on standby, ready to screen share when it is your presentation time. Please stop screen sharing after your presentation.<br /><br />

                            <strong>5.</strong> Your team will receive warnings at the 3-minute, 1-minute and 10-second mark.<br /><br />

                            <strong>6.</strong> 2 teams from each league will advance to the final round.<br></br>
                        </p>
                    </div>
                    </div>
                    <div class ="judge">

                    </div>
                    </div>

                
        
                </div>
            </div>
        )

        return livePage;
    }
}

export default FinalComp;