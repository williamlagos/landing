import React from "react";

const isBrowser = typeof window !== `undefined`

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    const seconds = isBrowser ? window.localStorage.getItem("accessed") || 604800 : 604800
    this.state = { time: {}, seconds: seconds };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    if (seconds % 5 === 0) {
      console.log(seconds);
      isBrowser && window.localStorage.setItem("accessed", seconds);
    }


    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <h1>
        {/*<button onClick={this.startTimer}>Start</button> &nbsp;*/}
        {this.state.time.h}:{this.state.time.m}:{this.state.time.s}s
      </h1>
    );
  }
}

export default Countdown;
