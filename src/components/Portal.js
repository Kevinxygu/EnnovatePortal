import './Portal.css';
import Contact from "./Contact.js";
import FinalComp from "./FinalComp.js";
import Guide from "./Guide.js";
import Resources from "./Resources.js";
import Timeline from "./Timeline.js";
import React from "react";
import EnnovateLogoW from "../assets/ENNOVATE-W.png";
import BackArrow from "../assets/Back-Arrow.png";
import GuideIcon from "../assets/Guide-Icon.png";
import ContactIcon from "../assets/Contact-Icon.png";
import TimelineIcon from "../assets/Timeline-Icon.png";
import ResourcesIcon from "../assets/Resources-Icon.png";
import FinalCompIcon from "../assets/FinalComp-Icon.png";
import MobileBackIcon from "../assets/MobileBackIcon.png";

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChooseGuide = this.handleChooseGuide.bind(this);
    this.handleChooseContact = this.handleChooseContact.bind(this);
    this.handleChooseTimeline = this.handleChooseTimeline.bind(this);
    this.handleChooseResources = this.handleChooseResources.bind(this);
    this.handleChooseFinalComp = this.handleChooseFinalComp.bind(this);
    this.state = {pageToRender: <Guide />, currentState: "guide"}
    // the pageState has to be either guide, contact, timeline, resources or finalcomp
  }

  // Changes active state to the Portal Guide page
  handleChooseGuide() {
    this.setState({pageToRender: <Guide />});
    this.setState({currentState: "guide"})
  }

  // Changes active state to the Contact Us page
  handleChooseContact() {
    this.setState({pageToRender: <Contact />});
    this.setState({currentState: "contact"})
  }

  // Changes active state to the Program Timeline page
  handleChooseTimeline() {
    this.setState({pageToRender: <Timeline />});
    this.setState({currentState: "timeline"})
  }

  // Changes active state to the Resources page
  handleChooseResources() {
    this.setState({pageToRender: <Resources />});
    this.setState({currentState: "resources"})
  }

  // Changes active state to the Final Competition page
  handleChooseFinalComp() {
    this.setState({pageToRender: <FinalComp />});
    this.setState({currentState: "finalcomp"})
  }

  render() {
    let pageToRender = this.state.pageToRender;
    let currentState = this.state.currentState;
    return (
      <div class="App">
        <div class="sidebar">
          <img src={EnnovateLogoW} class="Ennovate-logo"></img>
          <a href="https://ennovateubc.org/" class="return-link">
            <button class="return-button">
              <img src={BackArrow} class="return-arrow"></img>
            </button>
          </a>
          <div class="section-links">
            <div class="section-link" id="guide" onClick={this.handleChooseGuide} style={{
              background: (currentState == "guide") ? "#3e6bb8" : "none"
            }}>
              <img src={GuideIcon} class="link-icon" ></img>
              <p class="link-text">Portal Guide</p>
            </div>

            <div class="section-link" id="contact" onClick={this.handleChooseContact} style={{
              background: (currentState == "contact") ? "#3e6bb8" : "none"
            }}>
              <img src={ContactIcon} class="link-icon"></img>
              <p class="link-text">Contact Us</p>
            </div>
            
            <div class="section-link" id="timeline" onClick={this.handleChooseTimeline} style={{
              background: (currentState == "timeline") ? "#3e6bb8" : "none"
            }}>
              <img src={TimelineIcon} class="link-icon"></img>
              <p class="link-text">Program Timeline</p>
            </div>

            <div class="section-link" id="resources" onClick={this.handleChooseResources} style={{
              background: (currentState == "resources") ? "#3e6bb8" : "none"
            }}>
              <img src={ResourcesIcon} class="link-icon"></img>
              <p class="link-text">Resources</p>
            </div>

            <div class="section-link" id="final-comp" onClick={this.handleChooseFinalComp} style={{
              background: (currentState == "finalcomp") ? "#3e6bb8" : "none"
            }}>
              <img src={FinalCompIcon} class="link-icon"></img>
              <p class="link-text">Final Competition</p>
            </div>
            
          </div>
        </div>
        <div class="content-container">
            {pageToRender}
        </div>
        <div class="mobile-sidebar">
          <a href="https://ennovateubc.org/"><img src={MobileBackIcon} class="mobile-back"></img></a>
          <img src={GuideIcon} class="mobile-icon" onClick={this.handleChooseGuide} style={{
            background: (currentState == "guide") ? "#3e6bb8" : "none"
          }}></img>
          <img src={ContactIcon} class="mobile-icon" onClick={this.handleChooseContact} style={{
            background: (currentState == "contact") ? "#3e6bb8" : "none"
          }}></img>
          <img src={TimelineIcon} class="mobile-icon" onClick={this.handleChooseTimeline} style={{
            background: (currentState == "timeline") ? "#3e6bb8" : "none"
          }}></img>
          <img src={ResourcesIcon} class="mobile-icon" onClick={this.handleChooseResources} style={{
            background: (currentState == "resources") ? "#3e6bb8" : "none"
          }}></img>
          <img src={FinalCompIcon} class="mobile-icon" onClick={this.handleChooseFinalComp} style={{
            background: (currentState == "finalcomp") ? "#3e6bb8" : "none"
          }}></img>
        </div>
      </div>
    )
  }
}

export default Portal;
