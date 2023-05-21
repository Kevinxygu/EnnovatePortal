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

                {/* <div class="maintext">Please RSVP with this <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1dYmFP581K-R9ms1H245_7BlcX-8m7iBB9W3vxdFBUrtyyw/viewform?usp=sf_link" style={{color: "#000000", fontWeight: "600"}}><p style={{color: 
                    "#000000", display: "inline"}}>link</p></a></div> */}

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
                    <div class="outline" id="one"><div class="dot" id="activity1"></div></div>
                    <div class="outline" id="two"><div class="dot" id="activity1"></div></div>
                    <div class="outline" id="three"><div class="dot" id="activity2"></div></div>
                    <div class="outline" id="four"><div class="dot" id="activity3"></div></div>
                    <div class="outline" id="five"><div class="dot" id="activity4"></div></div>
                    <div class="outline" id="six"><div class="dot" id="activity5"></div></div>
                    <div class="outline" id="seven"><div class="dot" id="activity6"></div></div>
                    <div class="outline" id="eight"><div class="dot" id="activity7"></div></div>
                    <div class="outline" id="nine"><div class="dot" id="activity8"></div></div>
                    </div>
                    </div>

                    <div class="schedule-description">
                    {/* <div class="description-item"><h1>9:00 - 10 AM </h1><p class="description">Registration & Breakfast</p></div>
                    <div class="description-item"><h1>10:00 - 10:15 AM</h1><p class="description">Opening Ceremony</p></div>
                    <div class="description-item"><h1>10:15 - 11:05 AM</h1><p class="description">Workshop 1</p></div>
                    <div class="description-item"><h1>11:05 - 11:20 AM</ h1><p class="description">Opening Round Preparation</p></div>
                    <div class="description-item"><h1>11:20 - 12:30 PM</h1><p class="description">League Presentations at HA 491, 492, BIG 4</p></div>
                    <div class="description-item"><h1>12:30 - 1:00 PM</h1><p class="description">Judge Deliberation, Kahoot & Teacher's Forum</p></div>
                    <div class="description-item"><h1>1:00 - 1:45 PM</h1><p class="description">Lunch</p></div>
                    <div class="description-item"><h1>1:45 - 2:05 PM</h1><p class="description">Walk to SWING Building</p></div>
                    <div class="description-item"><h1>2:05 - 2:35 PM</h1><p class="description">Workshop 2</p></div>
                    <div class="description-item"><h1>2:35 - 2:40 PM</h1><p class="description">Final Round Results & Preparations</p></div>
                    <div class="description-item"><h1>2:40 - 3:55 PM</h1><p class="description">Final Round Preparations</p></div>
                    <div class="description-item"><h1>3:55 - 4:10 PM</h1><p class="description">Judges Deliberations</p></div>
                    <div class="description-item"><h1>4:10 - 5:00 PM</h1><p class="description">Closing Ceremony & Awards</p></div> */}
                    <div class="description-item">
    <h1>9:30 AM - 10:00 AM</h1>
    <p class="description">Welcome Activity</p>
  </div>

  <div class="description-item">
    <h1>10:00 AM - 10:15 AM</h1>
    <p class="description">Opening Ceremony</p>
  </div>

  <div class="description-item">
    <h1>10:15 AM - 10:45 AM</h1>
    <p class="description">Presentation Prep</p>
  </div>

  <div class="description-item">
    <h1>10:50 AM - 12:00 PM</h1>
    <p class="description">League Presentations</p>
  </div>

  <div class="description-item">
    <h1>12:00 PM - 1:00 PM</h1>
    <p class="description">Lunch</p>
  </div>

  <div class="description-item">
    <h1>1:00 PM - 1:45 PM</h1>
    <p class="description">Keynote</p>
  </div>

  <div class="description-item">
    <h1>1:45 PM - 2:40 PM</h1>
    <p class="description">CPA Workshop</p>
  </div>

  <div class="description-item">
    <h1>2:40 PM - 4:00 PM</h1>
    <p class="description">Final Presentations</p>
  </div>

  <div class="description-item">
    <h1>4:00 PM - 5:00 PM</h1>
    <p class="description">Closing and Awards Ceremony</p>
  </div>
                    </div>
                    </div>

                    <div class="league-information">
                    <h1 class="leagueheading">League Information</h1>
                    <h4 id="leaguename">League 1:</h4>
                        <ul>
                            <li>U-Hill - Beyond Leather</li>
                            <li>Prince of Wales - HiveSeal</li>
                            <li>Fleetwood Park - Tumble Buddies</li>
                            <li>Killaney - Sustainable Soy</li>
                        </ul>

                    <h4 id="leaguename">League 2:</h4>
                        <ul>
                            <li>Notre Dame - Soapify</li>
                            <li>Killarney - Pouchify</li>
                            <li>Windermere</li>
                            <li>Prince of Wales - Coastal Critters</li>
                        </ul>

                    <h4 id="leaguename">League 3:</h4>
                        <ul>
                            <li>Fleetwood - HiveHugs</li>
                            <li>Magee</li>
                            <li>Notre Dame - Al Fresco</li>
                            <li>U-Hill - Green Flame</li>
                        </ul>

                    </div>

                    <h1 class="leagueheading">Judging Rubric</h1>
                    <div class="judging-rubric">
                    <div id="rubriclink">
                        <a href="https://drive.google.com/file/d/1rSmvgkCqDJGGYJ5gde0t0NZ_N1wAIXsA/view?usp=sharing">
                            <img class ="rubricimg" src={FinalCompRubric}></img>
                        </a>
                    </div>
                    <h1 class="leagueheading">Judging Rules</h1>
                    <div class="rubricguidelines">
                        <p class="judgingRules">
                            <strong>1.</strong> All presentations will be cut off at the 7-MINUTE MARK. No additional time will be permitted.<br /><br />

                            <strong>2.</strong> All presentations will be followed by a 3-MINUTE Q&A period. Only judges are permitted to ask questions.<br /><br />

                            <strong>3.</strong> Please be respectful of others during their presentation times. No interruptions, turn phones off.<br /><br />

                            <strong>4.</strong> As you have already sent the slides, please be prepared to present <br /><br /> 

                            <strong>5.</strong> Your team will receive warnings at the 3-minute, 1-minute and 10-second mark.<br /><br />

                            <strong>6.</strong> 2 teams from each league will advance to the final round.<br></br>
                            <br></br>
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