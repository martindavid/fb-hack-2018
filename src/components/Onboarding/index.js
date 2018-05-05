// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';

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
        }
        this.onQuestionAnswer = (answer, part) => {
            this.setState({
                [part]: answer
            })
        }
    }
    componentWillReceiveProps(nextProps) {

    }

    renderQuestion1 = () => {
        return <Question1 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    }
    renderQuestion2 = () => {
        return <Question2 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    }
    renderQuestion3 = () => {
        return <Question3 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    }
    renderQuestion4 = () => {
        return <Question4 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    }
    renderQuestion5 = () => {
        return <Question5 history={this.props.history} onQuestionAnswer={this.onQuestionAnswer} />
    }

    props: Props;

    render() {
        return (
            <Switch>
                <Route path="/onboarding" exact component={this.renderQuestion1} />
                <Route path="/onboarding/q2" component={this.renderQuestion2} />
                <Route path="/onboarding/q3" component={this.renderQuestion3} />
                <Route path="/onboarding/q4" component={this.renderQuestion4} />
                <Route path="/onboarding/q5" component={this.renderQuestion5} />
            </Switch>
        );
    }
}

export default Onboarding;
