import Portal from "./components/Portal.js";
import React from "react";
import FinalCompCounter from "./components/FinalCompCounter.js";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectIndex = this.handleSelectIndex.bind(this);
        this.handleSelectTeam = this.handleSelectTeam.bind(this);
        this.handleSelectFinalComp = this.handleSelectFinalComp.bind(this);
        this.handleSelectPortal = this.handleSelectPortal.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = {currentPage: "index"};
        // currentPage must be one of index, team, finalComp, or portal
    }

    handleSelectIndex() {
        this.setState({currentPage: "index"});
    }

    handleSelectTeam() {
        this.setState({currentPage: "team"});
    }

    handleSelectFinalComp() {
        this.setState({currentPage: "finalcomp"});
    }

    handleSelectPortal() {
        this.setState({currentPage: "portal"});
    }

    toggleMobileMenu() {
        let links = document.getElementById("mobile-header-links");
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }

    render() {
        const header = (
            <div class="header">
                <img class="header-logo" src={require("./assets/images/ENNOVATE-W.png")} alt="The logo for UBC Ennovate" onClick={this.handleSelectIndex}></img>
                    <div class="header-links">
                        <a class="header-link" onClick={this.handleSelectTeam}>THE TEAM</a>
                        <a class="header-link" onClick={this.handleSelectFinalComp}>FINAL COMP</a>
                        <a class="header-link" onClick={this.handleSelectPortal}><button class="header-button">PORTAL</button></a>
                    </div>
            </div>
        )

        const mobileMenu = (
            <div class="mobile-header">
                <a href="#top"><img class="header-logo" src={require("./assets/images/ENNOVATE-W.png")} alt="The logo for UBC Ennovate" onClick={this.handleSelectIndex}></img></a>
                <div id="mobile-header-links">
                    <a class="mobile-header-link" onClick={this.handleSelectTeam}>THE TEAM</a>
                    <a class="mobile-header-link" onClick={this.handleSelectFinalComp}>FINAL COMP</a>
                    <a class="mobile-header-link" onClick={this.handleSelectPortal}>PORTAL</a>
                </div>
    
                <img onClick={this.toggleMobileMenu} class="mobile-icon-button" src={require("./assets/images/1024px-Hamburger_icon_white.svg.png")}></img>
            </div>
        )

        const footer = (
            <footer>
                <h2 class="wholesome-message" style={{fontWeight: "200"}}> Made with love from the Ennovate Team ♥</h2>
                <div class="bottom-row">
                    <div class="social-media">
                        <a href="mailto:admin@ennovateubc.org" target="_blank"><img class="social-media-link" src={require("./assets/images/EmailLogo.png")}></img></a>
                        <a href="https://www.instagram.com/ennovateubc/" target="_blank"><img class="social-media-link" src={require("./assets/images/IG-logo (1).png")}></img></a>
                        <a href="https://www.facebook.com/ennovateubc/" target="_blank"><img class="social-media-link" src={require("./assets/images/FBIcon.png")}></img></a>
                    </div>
                <p onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                }} style={{cursor: "pointer"}}>Return to the top</p>
                </div>
            </footer>
        )

        const indexPage = (
            <div class="indexPage">
                {header}
                {mobileMenu}
                <div class="hero" id="top">
                    <img class="background-image" src={require("./assets/images/ENNOVATE_BACKGROUND.jpg")} alt="Background photo for UBC Ennovate"></img>
                    <img class="background-mobile-image" src={require("./assets/images/ENNOVATE-MOBILE-BACKGROUND.jpg")} alt="Background photo for UBC Ennovate"></img>
                    <div class="center-top-text">Welcome to</div>
                    <div class="center-Ennovate">E N N O V A T E</div>
                </div>

                <div class="introduction">
                    <h1 class="intro-header"><strong>Who are we?</strong></h1>
                    <p class="blurb">Ennovate is an intensive, 4 month entrepreneurial education project that focuses on empowering high school students through interactive workshops that help students develop a portfolio of fundamental business skills and a variety of soft skills. Under the support and guidance of the Ennovate team, students participating in the Ennovate program will create a mini social-enterprise that addresses a pressing social or environmental concern, replicating that of a business that would thrive in the real world. At the very end of the program, students will pitch their developed businesses to a panel of industry professionals, showcasing all of their hard work.</p>
                </div>

                <div class="introduction">
                    <h1 class="intro-header"><strong>What is Enactus UBC?</strong></h1>
                    <p class="blurb">Enactus is a global, student-led organization dedicated to enacting positive social change through the lens of entrepreneurship.
             We crave to see improvements in the community, and are passionate facilitators who help make them happen. We know that together, we can and will make a 
             difference this year and in future years to come.  <a href="https://www.enactusubc.ca/" target="_blank">Enactus UBC</a> is home to a team of over 100 students who collaborate to develop unique projects to serve our campus and community, 
             further driving the Enactus mission.
                    </p>
                </div>

                <h1 class="intro-header" style={{textAlign: "center"}}><strong>Last year...</strong></h1>

                <div class="semester-stats">
                    <div class="semester-stat">
                        <div class="big-number">26</div>
                        <div class="stat">school businesses</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">5</div>
                        <div class="stat">cities in British Columbia</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">~1000</div>
                        <div class="stat">students directly impacted</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">$6,825.12</div>
                        <div class="stat">in net income for schools</div>
                    </div>
                </div>

                <div class="teacher-contact">
                    <h2>Interested in bringing Ennovate to your class?</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9aX22hfqjL20yaWa-DIx-5Vc9SYelcrWh_kBEoQDLfRNRGw/viewform?usp=sf_link" target="_blank"><button class="teacher-button">CONTACT US</button></a>
                </div>

                <div class="sponsors">
                    <h1 class="sponsor-header"><strong>Affiliated with...</strong></h1>
                    <div class="sponsor-logos">
                        <a target="_blank" href="https://enactusubc.ca"><img class="sponsor" src={require("./assets/images/Enactus UBC.png")}></img></a>
                        <img class="sponsor" style={{maxWidth: "100px"}} src={require("./assets/images/ubc-logo.png")}></img>
                        <img class="sponsor" style={{maxWidth: "100px"}} src={require("./assets/images/AMS-Logo-Square-o4hkwugu21b6jwb0jidkkle865qhdj550p6xw97ev4.png")}></img>
                    </div>
                </div>
                {footer}
            </div>
        )

        const TeamPage = (
            <div class="teamPage">
                {header}
                {mobileMenu}
                <div class="team-members section">
                    <div class="member block">
                        <h1 class="person-name">Tiya Tanaka</h1>
                        <p class="person-title">Project Director</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Tiya-Tanaka.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Euna Ao</h1>
                        <p class="person-title">Project Director</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Euna-Ao.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Topher So</h1>
                        <p class="person-title">Logistics Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Topher-So.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Patrick Kim</h1>
                        <p class="person-title">Logistics Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Patrick-Kim.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Arisha Ahmed</h1>
                        <p class="person-title">Mentorship Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Arisha.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Carina Koo</h1>
                        <p class="person-title">Internal Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Carina-Koo.png")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Ashley Liu</h1>
                        <p class="person-title">External Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Ashley-Liu.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Kevin Gu</h1>
                        <p class="person-title">Technology Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kevin-photo.jpg")}></img>
                    </div>


                    <div class="member block">
                        <h1 class="person-name">Kimi Ho</h1>
                        <p class="person-title">Content Creation Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kimi-Ho.jpeg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Khushi Dhand</h1>
                        <p class="person-title">Marketing Manager</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Khushi-Dhand.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Amanda Sam</h1>
                        <p class="person-title">Ennovate Advisor</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Amanda-Sam.jpg")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Ryu Watanabe</h1>
                        <p class="person-title">Ennovate Advisor</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Ryu-Watanabe.jpg")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Stephanie Cao</h1>
                        <p class="person-title">Technology Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Stephanie-Cao.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Jay Park</h1>
                        <p class="person-title">Technology Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Jay-Park.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">David Kou</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/David-Kou.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Emily Chu</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Emily-Chu.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Felix Li</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Felix-Li.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Alton Hsu</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Alton-Hsu.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Austin Cu</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Austin-Cu.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Christopher Le</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Chris-Le.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Curtis Yang</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Curtis-Yang.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Garrett Chu</h1>
                        <p class="person-title">Internal Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Garrett-Chu.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Hannah Azad</h1>
                        <p class="person-title">Marketing Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Hannah-Azad.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Jenny Lan</h1>
                        <p class="person-title">Internal Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Jenny-Lan.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Jonathan Li</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Jonathan-Li.PNG")}></img>
                    </div> 
                    <div class="member block">
                        <h1 class="person-name">Jose Pablo Villagomez</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Jose-Pablo.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Kesar Mehta</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kesar-Mehta.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Kelly Fang</h1>
                        <p class="person-title">Marketing Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kelly-Fang.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Kesar Mehta</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kesar-Mehta.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Lucy Zhu</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Lucy-Zhu.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Linh Vu</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Linh-Vu.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Olivia Chung</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Olivia Chung.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Paige Bindley</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Paige-Bindley.PNG")}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Rawan Ahmed</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Rawan-Ahmad.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Reagan Leung</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Reagan-Leung.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Shiv Kala</h1>
                        <p class="person-title">Project Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Shiv-Kala.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Penny Pang</h1>
                        <p class="person-title">Logistics Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Penny-Pang.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Sofia/Sammie Ocampo</h1>
                        <p class="person-title">Marketing Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Sammie-Ocampo.PNG")}></img>
                    </div>
                    <div class="member block">
                        <h1 class="person-name">Steven Vo</h1>
                        <p class="person-title">Logistics Associate</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Steven-Vo.PNG")}></img>
                    </div>
                </div>
                {footer}
            </div>
        )

        const FinalCompPage = (
            <div class="finalComp">
                {header}
                {mobileMenu}
                <FinalCompCounter />

                <h1 style={{textAlign: "center", zIndex: "50"}} class="final-comp-blurb"><strong>Until final comp on Jan. 21, 2023! Check the portal when that happens</strong></h1>


                <div class="ennovate-sleep">
                    <img src={require("./assets/ENNOVATESLEEP.gif")} alt="Ennovate logo" class="ennovate-gif"></img>
                    <div class="inner">
                        <img class="ennovate-wake" src={require("./assets/images/ENNOVATE-WAKE.png")}></img>
                    </div>
                </div>
                {footer}
            </div>
        )

        let currentPage = this.state.currentPage;

        switch (currentPage) {
            case "index":
                return indexPage;
                break;
            case "team":
                return TeamPage;
                break;
            case "finalcomp":
                return FinalCompPage;
                break;
            case "portal":
                return <Portal />
                break;
        }
    }
}

export default App;