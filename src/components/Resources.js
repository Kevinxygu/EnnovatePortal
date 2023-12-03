import "./Resources.css";
import React from "react";
import WorkshopBackground from "../assets/Ennovate-Filler.jpg"
import ProgramPackage from "../assets/Program-Package.png";
import SummarySheets from "../assets/Summary-Sheet.png";
import Rubric from "../assets/Rubric.png";
import XPGoatSoap from "../assets/XPGoatSoap.png";
import XpJardenings from "../assets/XPJardenings.jpg";
import XPMindlight from "../assets/XPMindlight.jpg";
import XPTotesation from "../assets/XPTotesation.jpg";
import XPTidalRings from "../assets/XPTidalRings.jpg";
import XPWaves from "../assets/XPWaves.jpg";
import XPUnitee from "../assets/XPUnitee.png";
import XPOsmia from "../assets/XPOsmia.png";


class Resources extends React.Component {
    render() {
        return (
            <div class="resources">
                <h2 class="section-title">Resources</h2>
                <div class="section-line"></div>
                <div class="content">
                    <p class="description">Posted here are resources to help you with your business plan :</p>
                    <h2 class="heading">Workshop Slides</h2>
                    <div class="grid">
                        <div class="workshop">
                            <a href="https://docs.google.com/presentation/d/1fvbvT-fRLl-Sa6-enCdl_PxQfM0V52fsQMQddcz6UkM/edit?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 1: Intro</p>
                        </div>
                        <div class="workshop">
                            <a href="https://docs.google.com/presentation/d/1ZKhlvZQonsMwtWbfF7wI7Lc7UMkxStXQdgeXvNbriPM/edit?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 2: CSR + Sustainability</p>
                        </div>
                        <div class="workshop">
                            <a href="https://docs.google.com/presentation/d/1NUrJmMgdlG2shloru4hmcHFqwxL-bADtvD30Dp1HvWQ/edit?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 3: Marketing</p>
                        </div>
                        
                        <div class="workshop">
                            <a href="https://docs.google.com/presentation/d/1I1EpwDJKxuPcbFHuCKR4tkCsQPAEX-hgvc98q1joH7Y/edit?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 4: Finances</p>
                        </div>

                        {/*<div class="workshop">
                            <a href="https://drive.google.com/file/d/1sRcg-xJU3jGmY1S4p2mgkfWEF2A-M0Aq/view?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 5</p>
                        </div> */}
                    </div>

                    {/* <h2 class="heading">Summary Sheets</h2>
                    <a href="https://drive.google.com/file/d/1YFKmnT-HLJRISkwzFySqSlpqt_iCiUr3/view" target="_blank"><img src={SummarySheets} class="program-package"></img></a> */}


                    <h2 class="heading">Program Package</h2>
                    <a href="https://drive.google.com/file/d/1DnSlN-a6IfpER8xEExvxhoeA-87lXaTb/view?usp=sharing" target="_blank"><img src={ProgramPackage} class="program-package"></img></a>

                    {/* <h2 class="heading">Grading Rubric</h2>
                    <a href="https://drive.google.com/file/d/1F6Kv1okCEdiH1qpFKfHGnhp6to85HD1x/view?usp=sharing" target="_blank"><img src={Rubric} class="program-package"></img></a> */}
                    <h2 class="heading">Previous Projects</h2>
                    <p class="description">Below are selected Ennovate projects from previous years that we saw something special in. Many of these projects were finalists during final competition day, or better yet winners!</p>
                    <p class="description">Click on one to see their project plans!</p>

                    
                    <div class="grid" id="example-schools">
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1xAGcZtx-sEpfnEXXeCSyO2slQb6B83p2/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPGoatSoap}></img></a>
                            <p class="workshop-name school-name" style={{color: "#000000"}}>Hamber: Goat Soap</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1vc2g-5PBGTwww0PFFxh9u_ryJlTxE4Cc/view?usp=sharing" target="_blank"><img class="workshop-img" src={XpJardenings}></img></a>
                            <p class="workshop-name school-name">Holy Cross: Jardenings</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1l1HO5rJnxnl-NEFOnC8PPCHS6nqFWMLN/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPTotesation}></img></a>
                            <p class="workshop-name school-name">Killarney: Totesational</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1eF-UU4BCRwP7hG59TztOFB0J58XwPMp1/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPMindlight}></img></a>
                            <p class="workshop-name school-name">Magee: Mindlights</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1mxI4-8OieKUue4JML2DEFJFPricyDBrs/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPTidalRings}></img></a>
                            <p class="workshop-name school-name">Prince of Wales: <br />Tidal Rings</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/15MOVjgNkTz1Jj4d7rgNG3j7-VhBOuavI/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPWaves}></img></a>
                            <p class="workshop-name school-name" style={{color: "#000000"}}>Prince of Wales: Waves</p>
                        </div>
                        
                        
                    </div>

                    <p class="description">Listed here are also example presentations at final competition!</p>
                    <div class="grid" id="school-powerpoints">
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1s3b8qou7CoAAite6z-qYKPLJbv-FCeLA/view" target="_blank"><img class="workshop-img" src={XPGoatSoap}></img></a>
                            <p class="workshop-name school-name" style={{color: "#000000"}}>Hamber: Goat Soap</p>
                        </div>

                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1M-3lUdL16ZJFMmZq3EXDioV_W5X6Pv6w/view" target="_blank"><img class="workshop-img" src={XPUnitee}></img></a>
                            <p class="workshop-name school-name" style={{color: "#000000"}}>Killarney: Unitee</p>
                        </div>

                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Tm5LH3Y3qWg9AV6mev-4I6xkmI-hsUJv/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPOsmia}></img></a>
                            <p class="workshop-name school-name">Hamber: Osmia</p>
                        </div>

                        
                    </div>


                </div>
            </div>
        )
    }
}

export default Resources;