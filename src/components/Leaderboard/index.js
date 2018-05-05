// @flow
import React from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Kids1 from '../../assets/kid-1.png';
import Kids2 from '../../assets/kid-2.png';
import Kids3 from '../../assets/kid-3.png';
import Kids4 from '../../assets/kid-4.png';
import Kids5 from '../../assets/kid-5.png';
import Kids6 from '../../assets/kid-6.png';
import Kids7 from '../../assets/kid-7.png';

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
  return (
    <Box>
      <List pad="medium">
        <ListItem pad="medium" separator="none">
          <Card
            direction="row"
            responsive={false}
            align="center"
            pad={{ between: 'medium', vertical: 'medium', horizontal: 'medium' }}
          >
            <Avatar src={Kids1} />
            <Label margin="none">John</Label>
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
            <Avatar src={Kids2} />
            <Label margin="none">Jessica</Label>
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
            <Avatar src={Kids3} />
            <Label margin="none">Stephen</Label>
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
            <Avatar src={Kids4} />
            <Label margin="none">Yuna</Label>
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
            <Avatar src={Kids5} />
            <Label margin="none">Michael</Label>
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
            <Avatar src={Kids6} />
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
