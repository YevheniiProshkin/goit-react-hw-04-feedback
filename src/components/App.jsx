import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = feedback =>
    this.setState(prev => {
      return { [feedback]: prev[feedback] + 1 };
    });

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
  }
}
