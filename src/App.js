import { Component } from 'react';
import React from 'react';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = prop => {
    this.setState(prevState => {
      return { [prop]: prevState[prop] + 1 };
    });
  };

  
  render() {

    return (
      <>
        <Section title="Please leave Feedback">

        </Section>

      </>
    );
  }

}

export default App;
