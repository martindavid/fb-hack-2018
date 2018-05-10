// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import dicImg2 from '../../assets/dic_2.png';


type Props = {
    history: Object,
};


class DetailDic extends Component {
  componentDidMount() {
    console.log('tets');
  }
    props: Props;

    render() {
      return (
        <Columns>
          <Box
            align="left"
            pad="medium"
            margin="medium"
            colorIndex="light-2"
          >
            <Image src={dicImg2} />
          </Box>
          <Box
            align="left"
            pad="medium"
            margin="medium"
            colorIndex="light-2"
          >
            <Label>
                        Box Cat
            </Label>
            <Paragraph size="medium">
                        Paper Cups
                        CO2: 0.72 kg / kg
                        Eco-friendly level: High

            </Paragraph>
            <Paragraph size="medium">

                        Paper cups have one advantage over plastic cups in their biodegradability. While they break down over time without causing harm to the environment, plastic cups don’t degrade for …

            </Paragraph>
          </Box>
        </Columns>
      );
    }
}

export default DetailDic;
