// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';

type Props = {
    history: Object,
};

class Question1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice1: false,
            choice2: false,
            choice3: true,
            choice4: false,
            choice5: false,
            answer: 40
        };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
        this.onChange5 = this.onChange5.bind(this);
    }
    componentWillReceiveProps(nextProps) {

    }
    componentDidMount() {

    }

    onChange1(event){
        if (event.target.value === 'on') {
            this.setState({
                choice1: true,
                choice2: false,
                choice3: false,
                choice4: false,
                choice5: false,
                answer: 0
            });
        }

    }

    onChange2(event){
        if (event.target.value === 'on') {
            console.log(event.target.value);
            this.setState({
                choice1: false,
                choice2: true,
                choice3: false,
                choice4: false,
                choice5: false,
                answer: 20
            });
        }
    }
    onChange3(event){
        if (event.target.value === 'on') {
            console.log(event.target.value);
            this.setState({
                choice1: false,
                choice2: false,
                choice3: true,
                choice4: false,
                choice5: false,
                answer: 40
            });
        }
    }
    onChange4(event){
        if (event.target.value === 'on') {
            console.log(event.target.value);
            this.setState({
                choice1: false,
                choice2: false,
                choice3: false,
                choice4: true,
                choice5: false,
                answer: 60
            });
        }
    }
    onChange5(event){
        if (event.target.value === 'on') {
            console.log(event.target.value);
            this.setState({
                choice1: false,
                choice2: false,
                choice3: false,
                choice4: false,
                choice5: true,
                answer: 100
            });
        }
    }
    props: Props;

    render() {
        return (
            <Box full justify="center" pad={{vertical: 'medium', horizontal: 'medium', between: 'large'}}>
            <Box align="center" justify="center">
                    <Label align="center">
                    How often do you eat animal-based products?
            </Label>
                <FormField>
                    <RadioButton id='choice1-1'
                                 name='choice1-1'
                                 label='Never (Vegan)'
                                 checked={this.state.choice1}
                                 onChange={this.onChange1} />
                    <RadioButton id='choice1-2'
                    name='choice1-2'
                    label='Infrequently'
                    checked={this.state.choice2}
                    onChange={this.onChange2} />
                    <RadioButton id='choice1-3'
                                 name='choice1-3'
                                 label='Occasionally'
                                 checked={this.state.choice3}
                                 onChange={this.onChange3} />
                    <RadioButton id='choice1-4'
                    name='choice1-4'
                    label='Often'
                    checked={this.state.choice4}
                    onChange={this.onChange4} />
                    <RadioButton id='choice1-5'
                                 name='choice1-5'
                                 label='Very Often'
                                 checked={this.state.choice5}
                                 onChange={this.onChange5} />
                    </FormField>
                    <br/>
                    <Button label="Next" onClick={() => {
                        this.props.onQuestionAnswer(this.state.answer, 'answer1');
                        this.props.history.push('/onboarding/q2');
                    }} />
                </Box>
            </Box>
            );
    }
}

export default Question1;