import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 10
    }
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  static getDerivedStateFromProps() {
    return {
      points: 1000
    }
  }
  render() {
    return (
      <React.Fragment>
        <h3>About</h3>
        <div>
          Points: {this.state.points}
        </div>
      </React.Fragment>
    )
  }
}

export default About
