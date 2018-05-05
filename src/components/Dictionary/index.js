// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Image from 'grommet/components/Image';
import dicImg1 from '../../assets/dic_1.png';
import dicImg2 from '../../assets/dic_2.png';
import dicImg3 from '../../assets/dic_3.png';

type Props = {
    history: Object,
};


class Dictionary extends Component {

    constructor(props){
        super(props);

        this.clickOne = () => {

        };
        this.clickTwo = () => {
            this.props.history.push('/home/historyDetail');
        };
        this.clickThree = () => {

        };

    }

    componentDidMount() {
    }
    props: Props;

    render() {
        return (
            <Columns>
                <Box align='left'
                     pad='medium'
                     margin='medium'
                     colorIndex='light-2'
                     onClick={this.clickOne}>
                    <Image src={dicImg1} />
                </Box>
                <Box align='left'
                     pad='medium'
                     margin='medium'
                     colorIndex='light-2'
                     onClick={this.clickTwo}>
                    <Image src={dicImg2} />
                </Box>
                <Box align='left'
                     pad='medium'
                     margin='medium'
                     colorIndex='light-2'
                     onClick={this.clickThree}>
                    <Image src={dicImg3} />
                </Box>
            </Columns>
        );
    }
}

export default Dictionary;
