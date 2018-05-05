// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';

type Props = {
    history: Object,
    result: Object
};

class ConsumptionResult extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.result.data.earth);
    }

    props: Props;


    render() {
        const earth = this.props.result != null ? this.props.result.data.earth : 0;
        let month = 0;
        let day = 0;
        let year = 0;
        if (this.props.result != null) {
            const date = new Date(this.props.result.data.date);
            month = date.getMonth();
            day = date.getDate();
            year = date.getFullYear();
        }
        return (
            <Box full justify="center" pad={{vertical: 'medium', horizontal: 'medium', between: 'large'}}>
                <Box align="center" justify="center">
                    <Label align="center">
                        If everyone lived like you, we would need <br/> {earth.toFixed(2)} <br/> Earths.
                    </Label>
                    <Label align="center">
                        Your personal Earth Overshoot Day is: {day}/{month}/{year}
                    </Label>
                    <br/>
                    <Button label="Start Your Journey" onClick={() => {
                        this.props.history.push('/home');
                    }} />
                </Box>
            </Box>
        );
    }
}

export default ConsumptionResult;
