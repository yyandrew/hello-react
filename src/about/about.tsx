import * as React from "react";
interface IProps {
  points: number;
}
interface IState {
  points: number;
}

class About extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      points: 10,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  static getDerivedStateFromProps() {
    return {
      points: 1000,
    };
  }
  render() {
    return (
      <React.Fragment>
        <h3>About</h3>
        <div>Points: {this.state.points}</div>
      </React.Fragment>
    );
  }
}

export default About;
