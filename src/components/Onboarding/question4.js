// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import { connect } from 'react-redux';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import Label from 'grommet/components/Label';
import { routes } from '../../utils/routes';
import Button from 'grommet/components/Button';
import Question2 from "./question2";

type Props = {
    history: Object,
};

class Question4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice1: false,
            choice2: false,
            choice3: true,
            choice4: false,
            choice5: false
        };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
        this.onChange5 = this.onChange5.bind(this);
    }
    componentWillReceiveProps(nextProps) {

    }

    onChange1(event){
        if (event.target.value === 'on') {
            this.setState({
                choice1: true,
                choice2: false,
                choice3: false,
                choice4: false,
                choice5: false,
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
            });
        }
    }
    props: Props;

    render() {
        return (
            <Box full justify="center" pad={{vertical: 'medium', horizontal: 'medium', between: 'large'}}>
                <Box align="center" justify="center">
                    <Label align="center">
                        How many hours do you fly each year?
                    </Label>
                    <FormField>
                        <RadioButton id='choice1-1'
                                     name='choice1-1'
                                     label='0 ~ 20hr'
                                     checked={this.state.choice1}
                                     onChange={this.onChange1} />
                        <RadioButton id='choice1-2'
                                     name='choice1-2'
                                     label='20 ~ 40hr'
                                     checked={this.state.choice2}
                                     onChange={this.onChange2} />
                        <RadioButton id='choice1-3'
                                     name='choice1-3'
                                     label='40 ~ 60hr'
                                     checked={this.state.choice3}
                                     onChange={this.onChange3} />
                        <RadioButton id='choice1-4'
                                     name='choice1-4'
                                     label='60 ~ 80hr'
                                     checked={this.state.choice4}
                                     onChange={this.onChange4} />
                        <RadioButton id='choice1-5'
                                     name='choice1-5'
                                     label='80hr or more'
                                     checked={this.state.choice5}
                                     onChange={this.onChange5} />
                    </FormField>
                    <br/>
                    <Button label="Next" onClick={() => this.props.history.push('/onboarding/q5')} />
                </Box>
            </Box>
        );
    }
}
export default Question4;
