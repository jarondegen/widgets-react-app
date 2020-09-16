import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super()
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let { time } = this.state;
        const timeString = time.toTimeString();
        const date = time.toDateString();
        return (
        <>
            <div className="clock">
                <h1>Clock</h1>
                <div class="clock-container">
                    <div class="time">
                        <h1>Time:</h1>
                        <h1>{timeString}</h1>
                    </div>
                    <div class="date">
                        <h1>Date:</h1>
                        <h1>{date}</h1>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Clock;
