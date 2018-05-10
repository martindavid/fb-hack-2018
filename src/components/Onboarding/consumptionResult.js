// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import SunBurst from 'grommet/components/SunBurst';
import Legend from 'grommet/components/Legend';
import Distribution from 'grommet/components/Distribution';


type Props = {
    history: Object,
    result: Object
};

class ConsumptionResult extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.result.data.earth);
  }

    props: Props;


    render() {
      let crop = 16;
      let graz = 16;
      let forest = 16;
      let fish = 16;
      let energy = 16;
      let built = 20;
      let food = 20;
      let housing = 20;
      let transport = 20;
      let goods = 20;
      let services = 20;
      if (this.props.result != null) {
        // detail data
        crop = this.props.result.data.crop;
        graz = this.props.result.data.graz;
        forest = this.props.result.data.forest;
        fish = this.props.result.data.fish;
        energy = this.props.result.data.energy;
        built = this.props.result.data.built;
        food = this.props.result.data.food;
        housing = this.props.result.data.housing;
        transport = this.props.result.data.transport;
        goods = this.props.result.data.goods;
        services = this.props.result.data.services;

        const total = food + housing + transport + goods + services;
        food = (food / total).toFixed(2) * 100;
        housing = (housing / total).toFixed(2) * 100;
        transport = (transport / total).toFixed(2) * 100;
        goods = (goods / total).toFixed(2) * 100;
        services = (services / total).toFixed(2) * 100;
      }
      return (
        <Box justify="center" pad={{ vertical: 'none', horizontal: 'none', between: 'none' }}>
          <Box align="center" direction="column">
            <br />
            <br />
            <br />
            <Label align="center">
                    # CO2 you emitted
                    =  # Cats you expelled
            </Label>
            <Label align="center">
                        Your CO2 emission:
            </Label>
            <Box align="start" direction="row">
              <SunBurst
                data={[{
                            label: 'crop',
                            value: crop,
                            colorIndex: 'neutral-1',
                        }, {
                            label: 'graz',
                            value: graz,
                            colorIndex: 'accent-1',
                            children: [

                            ],
                        }, {
                            label: 'forest',
                            value: forest,
                            colorIndex: 'neutral-3',
                            children: [

                            ],
                        }, {
                            label: 'fish',
                            value: fish,
                            colorIndex: 'accent-2',
                            children: [

                            ],
                        }, {
                            label: 'energy',
                            value: energy,
                            colorIndex: 'neutral-2',
                            children: [

                            ],
                        }, {
                            label: 'built',
                            value: built,
                            colorIndex: 'neutral-4',
                            children: [

                            ],
                        }]}
                active={[0, 0]}
                size="small"
              />
              <Legend series={[
                        { label: 'crop', colorIndex: 'neutral-1' },
                        { label: 'graz', colorIndex: 'accent-1' },
                        { label: 'forest', colorIndex: 'neutral-3' },
                        { label: 'fish', colorIndex: 'accent-2' },
                        { label: 'energy', colorIndex: 'neutral-2' },
                        { label: 'built', colorIndex: 'neutral-4' }]}
              />
            </Box>
            <Distribution
              series={[{ label: 'Food', value: food, colorIndex: 'graph-1' }, { label: 'Housing', value: housing, colorIndex: 'accent-2' }, { label: 'Transport', value: transport, colorIndex: 'unset' }, { label: 'Goods', value: goods, colorIndex: 'graph-1' }, { label: 'Services', value: services, colorIndex: 'graph-1' }]}
              full={false}
              size="small"
            />
            <Label align="center">
                        Now, warrior!
                        You have the power to save them. It’s the time to save cats’ world, and your world.
            </Label>
            <Button
              label="Start Your Journey"
              onClick={() => {
                        this.props.history.push('/home');
                    }}
            />
          </Box>
        </Box>
      );
    }
}

export default ConsumptionResult;
