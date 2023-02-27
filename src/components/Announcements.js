import "./Announcements.css";
import React from "react";

class Announcements extends React.Component {
    render(){
        return(
            <div class="contact">
                <h2 class="section-title">Announcements</h2>
                <div class="section-line"></div>
                <div class="content">
                     <div class = "announcement">
                        <div id="imageReplacement"></div>
                
                         <div id = "textSide">
                            <div class="announcementTitle">Figma Balls</div>
                            <div class="descriptionLine">
                                <div class="announcementAuthor">Kevin Gu | ERG</div>
                                <div class="announcementDate">May 6</div>
                            </div>
                            <div class="announcementText">Figma Balls Figma Balls Figma Balls</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
    





            
        )
    }
}

export default Announcements;