// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
import ConsumptionResult from "./consumptionResult";

type Props = {
    history: Object,
};

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
      data: null,
    };
    this.onQuestionAnswer = (answer, part) => {
      this.setState({
        [part]: answer,
      });
    };

      this.onSubmitAnswer = () => {
          fetch('https://api.footprintcalculator.org/v1/calculate', {
              method: 'post',
              headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJldmEyQGFzZC5jb20iLCJleHAiOjE1MjU1OTUzMzV9.07Rwv5h5eJX0JjNE2bAOQnTQs6QEr6xHPHaOGHtuBgLdnNbal3qt2IQvBRfOR3nzTWIzRRzY9krIfgYv_u3pXA',
                  'Content-Type': 'application/json'},
              body: '{"country":62,"answers":[{"questionid":1,"value":'+ this.state.answer1 + '},{"questionid":7,"value":91},{"questionid":18,"value":'+ this.state.answer2 +'},{"questionid":20,"value":20},{"questionid":22,"value":1},{"questionid":19,"value":50},{"questionid":23,"value":10},{"questionid":24,"value":100},{"questionid":21,"value":100},{"questionid":10,"value":19},{"questionid":25,"value":'+ this.state.answer5 +'},{"questionid":26,"value":'+ this.state.answer3 +'},{"questionid":27,"value":49},{"questionid":28,"value":108},{"questionid":29,"value":42},{"questionid":30,"value":0},{"questionid":33,"value":'+ this.state.answer4 +'}]}'
          }).then(function(response) {
              console.log('Response:', response);
              return response.json();
          }).then(function(data) {
              this.setState({
                 data: data
              });
              console.log('Data:', data);
          }.bind(this));

      };
  }
  componentWillReceiveProps(nextProps) {

  }

    props: Props;
    renderQuestion1 = () => <Question1 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    renderQuestion2 = () => <Question2 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    renderQuestion3 = () => <Question3 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    renderQuestion4 = () => <Question4 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    renderQuestion5 = () => <Question5 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} onSubmitAnswer={this.onSubmitAnswer} />
    renderResult = () => <ConsumptionResult history={this.props.history} result={this.state.data} />


    render() {
      return (
        <div>
          <Header label="Onboarding" />
          <Switch>
            <Route path="/onboarding" exact component={this.renderQuestion1} />
            <Route path="/onboarding/q2" component={this.renderQuestion2} />
            <Route path="/onboarding/q3" component={this.renderQuestion3} />
            <Route path="/onboarding/q4" component={this.renderQuestion4} />
            <Route path="/onboarding/q5" component={this.renderQuestion5} />
            <Route path="/onboarding/result" component={this.renderResult} />
          </Switch>
        </div>
      );
    }
}

export default Onboarding;
