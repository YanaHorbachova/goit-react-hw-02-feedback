import { Component } from 'react';
import React from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = optionName => {
    this.setState(prevState => {
      return { [optionName]: prevState[optionName] + 1 };
    });
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotal();
  };

  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();

    return (
      <>
        <Section title="Please leave Feedback">
        <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercent={this.countPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given." />
        )}

      </>
    );
  }

}

export default App;
