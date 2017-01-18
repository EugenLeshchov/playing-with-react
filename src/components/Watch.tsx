import * as React from "react";

export interface WatchProps {}

export interface WatchState {
    date: Date
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Watch extends React.Component<WatchProps, WatchState> {
    timerId: number;

    constructor(props: WatchProps) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <h2>{this.state.date.toLocaleTimeString()}</h2>;
    }
}