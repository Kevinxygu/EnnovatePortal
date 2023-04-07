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
                    
                        <div id="imageReplacement">
                        </div>
                
                         <div class= "textSide">
                            <div class="announcementTitle">Announcement Portal Open!</div>
                            <div class="descriptionLine">
                                <div class="announcementAuthor">Kevin Gu | Technology Manager</div>
                                <div class="announcementDate">Apr 6</div>
                            </div>
                            <div class="announcementText">The announcement page for the portal is now open! Updated information about competitions and business lessons will be posted here so check often! You may also see a few announcements from your school's PAs so make sure that you check here. Your PAs might be communicating with you through here :))</div>
                        </div>
                    </div>
                    {/* <div class = "announcement">
                        <div id="imageReplacement"></div>
                
                         <div class= "textSide">
                            <div class="announcementTitle">Stuff</div>
                            <div class="descriptionLine">
                                <div class="announcementAuthor">Euna Ao | ERG</div>
                                <div class="announcementDate">May 6</div>
                            </div>
                            <div class="announcementText">Lorem ipsum bruh lorem ipsum Lorem ipsum bruh lorem ipsum Lorem ipsum bruh lorem ipsum</div>
                        </div>
                    </div> */}

                </div>
            </div>
            
    





            
        )
    }
}

export default Announcements;