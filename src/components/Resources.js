import "./Resources.css";
import React from "react";
import WorkshopBackground from "../assets/Ennovate-Filler.jpg"
import ProgramPackage from "../assets/Program-Package.png";
import Rubric from "../assets/Rubric.png";
import XPGoatSoap from "../assets/XPGoatSoap.png";
import XpJardenings from "../assets/XPJardenings.jpg";
import XPMindlight from "../assets/XPMindlight.jpg";
import XPTotesation from "../assets/XPTotesation.jpg";
import XPTidalRings from "../assets/XPTidalRings.jpg";
import XPWaves from "../assets/XPWaves.jpg";


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
                            <a href="https://drive.google.com/file/d/1o7tNhIDX7wK8Ac338foKoh7K68BbhI4o/view?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 1</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={WorkshopBackground}></img></a>
                            <p class="workshop-name">Workshop 2</p>
                        </div>
                    </div>

                    <h2 class="heading">Program Package</h2>
                    <a href="https://drive.google.com/file/d/1XxbNWIC7e0IDRhkndLtucyTqfTaHh0ns/view?usp=sharing" target="_blank"><img src={ProgramPackage} class="program-package"></img></a>

                    <h2 class="heading">Grading Rubric</h2>
                    <a href="https://drive.google.com/file/d/1F6Kv1okCEdiH1qpFKfHGnhp6to85HD1x/view?usp=sharing" target="_blank"><img src={Rubric} class="program-package"></img></a>
                    <h2 class="heading">Previous Projects</h2>
                    <p class="description">Below are selected Ennovate projects from previous years that we saw something special in. Many of these projects were finalists during final competition day, or better yet winners!</p>
                    <p class="description">Click on one to see their project plans!</p>

                    <div class="grid" id="example-schools">
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1o7tNhIDX7wK8Ac338foKoh7K68BbhI4o/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPGoatSoap}></img></a>
                            <p class="workshop-name school-name">Hamber: Goat Soap</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={XpJardenings}></img></a>
                            <p class="workshop-name school-name">Holy Cross: Jardenings</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPTotesation}></img></a>
                            <p class="workshop-name school-name">Killarney: Totesational</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPMindlight}></img></a>
                            <p class="workshop-name school-name">Magee: Mindlights</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPTidalRings}></img></a>
                            <p class="workshop-name school-name">Prince of Wales: Tidal Rings</p>
                        </div>
                        <div class="workshop">
                            <a href="https://drive.google.com/file/d/1Q9Gy9b2hFgneOxOqPPMXKROK-Sj9P8Uz/view?usp=sharing" target="_blank"><img class="workshop-img" src={XPWaves}></img></a>
                            <p class="workshop-name school-name">Prince of Wales: Waves</p>
                        </div>
                        
                    </div>


                </div>
            </div>
        )
    }
}

export default Resources;