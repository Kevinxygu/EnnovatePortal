import React from "react";

class FinalCompCounter extends React.Component {
    constructor(props) {
        super(props);
        this.renderIntervals = this.renderIntervals.bind(this);
        this.state = {currentTime: Date.now()};
    }

    componentDidMount() {
        this.interval = setInterval(this.renderIntervals, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderIntervals() {
        this.setState({currentTime: Date.now()});
        let currentTime = this.state.currentTime;
        const finalCompDate = new Date("January 21, 2023 16:00:00").getTime();

        const distance = finalCompDate - currentTime;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // Display each result
        if (distance < 0) {
            document.getElementById("seconds").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("days").innerHTML = "00";
        } else {
            document.getElementById("seconds").innerHTML = seconds;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("hours").innerHTML = hours
            document.getElementById("days").innerHTML = days;
        }
    }

    render() {
        return (
            <div class="countdown">
                <div class="time-block days">
                    <p id="days" class="date-time">??</p>
                    <p class="time-length">days</p>
                </div>

                <div class="time-block hours">
                    <p id="hours" class="date-time">??</p>
                    <p class="time-length">hours</p>
                </div>
                
                <div class="time-block minutes">
                    <p id="minutes" class="date-time">??</p>
                    <p class="time-length">minutes</p>
                </div>

                <div class="time-block seconds">
                    <p id="seconds" class="date-time">??</p>
                    <p class="time-length">seconds</p>
                </div>
            </div>
        )
    }
}
export default FinalCompCounter;