// @flow
import React from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Kids7 from '../../assets/kid-7.png';

import Person1 from '../../assets/profile_1.png';
import Person2 from '../../assets/profile_2.png';
import Person3 from '../../assets/profile_3.png';
import Person4 from '../../assets/profile_4.png';
import Person5 from '../../assets/profile_5.png';
import Person6 from '../../assets/profile_6.png';
import LeaderboardBar from '../../assets/leaderboard_bar.png';

const Avatar = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: solid 2px #d60b52;
`;

const Card = styled(Box)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export default function () {
  console.log('Loaded');

  return (
    <Box>
      <Box margin={{ horizontal: 'none', vertical: 'none', top: 'small' }} align="center" justify="center">
        <Image src={LeaderboardBar} />
      </Box>
      <List pad="medium">
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person1} />
            <Label margin="none">David</Label>
            <Box flex="grow" align="end">
              <Label margin="none">1,560</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person2} />
            <Label margin="none">Martin</Label>
            <Box flex="grow" align="end">
              <Label margin="none">1,420</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person3} />
            <Label margin="none">Gera</Label>
            <Box flex="grow" align="end">
              <Label margin="none">1,280</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person4} />
            <Label margin="none">Evan</Label>
            <Box flex="grow" align="end">
              <Label margin="none">960</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person5} />
            <Label margin="none">Kenny</Label>
            <Box flex="grow" align="end">
              <Label margin="none">760</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Person6} />
            <Label margin="none">Tina</Label>
            <Box flex="grow" align="end">
              <Label margin="none">600</Label>
            </Box>
          </Card>
        </ListItem>
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Kids7} />
            <Label margin="none">Curry</Label>
            <Box flex="grow" align="end">
              <Label margin="none">400</Label>
            </Box>
          </Card>
        </ListItem>
      </List>
    </Box>
  );
}
