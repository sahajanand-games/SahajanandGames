import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import SEO from 'infra/common/helpers/SEO';
import Breadcrumbs from 'infra/common/helpers/Breadcrumbs';
import { useRouter } from 'next/router';
import { GAMES_LIST } from 'games';
import { IGameStatus } from 'gamesShared/definitions/game';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const About = () => {
  const router = useRouter();
  return (
    <FreeBoardGamesBar>
      <Breadcrumbs
        itemListElements={[
          {
            position: 1,
            name: 'About',
            item: router.pathname,
          },
        ]}
      />
      <SEO
        title={'About'}
        description={'About sahajanand-games.com, a free and open-source platform to play satsang related games.'}
      />
      {getAboutCard()}
      {getContactCard()}
      {getContributorsCard()}
      {getCreditsCard()}
    </FreeBoardGamesBar>
  );
};
export default About;

function getAboutCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: '17px' }}>
          About Sahajanad Games
        </Typography>
        <Typography component="p">
          {'    '} Sahajanand Games is a platform for Satsangis to play satsang-related games. The aim of this project
          is to connect with Satsang in a new way. In future, we will continuously add new games and make our platform
          more fun.
          <br></br>
          <br></br>
          {'    '} This project is Open Source and it is maintained by volunteer Satsangies, who do this to get the
          belssings of Shreeji Maharaj and great Saints. If you have any suggestion or would like to help us make new
          games, you can always contact us via email or chat with us on Discord.
        </Typography>
      </CardContent>
    </Card>
  );
}

function getContributorToGames(): { [contributor: string]: string[] } {
  let result = {};
  for (const game of GAMES_LIST) {
    if (game.status != IGameStatus.PUBLISHED) {
      continue;
    }
    for (const contributor of game.contributors) {
      result = {
        ...result,
        [contributor]: [...(result[contributor] || []), game.name],
      };
    }
  }
  return result;
}

function compare(a, b) {
  const initialA = a.toUpperCase();
  const initialB = b.toUpperCase();

  if (initialA > initialB) {
    return 1;
  } else if (initialA < initialB) {
    return -1;
  }
  return 0;
}

function getContactCard() {
  // const contributorsToGames = getContributorToGames();
  // const contributors = Object.keys(contributorsToGames).sort(compare);
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Contact
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email" />
            <Button size="small" color="primary" href="mailto:sahajanand.games@gmail.com" target="_blank">
              sahajanand.games@gmail.com
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Chat" />
            <Button size="small" color="primary" href="https://discord.gg/yZYEaVR" target="_blank">
              Discord
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

function getContributorsCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Contributors
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Gaurav Patel" />
            <Button size="small" color="primary" href="https://github.com/gk-patel">
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Sandip Sorathiya" />
            <Button size="small" color="primary" href="https://github.com/sandipsorathiya">
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Jaydip Bhuva" />
            <Button size="small" color="primary" href="https://github.com/jd-bhuva">
              GitHub
            </Button>
          </ListItem>
          {/* {contributors.map((contributor) => (
            <ListItem key={contributor}>
              <ListItemAvatar>
                <Avatar alt={contributor} src={`https://github.com/${contributor}.png?size=40`} />
              </ListItemAvatar>
              <ListItemText primary={contributor} secondary={contributorsToGames[contributor].join(', ')} />
              <Button
                size="small"
                color="primary"
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${contributor}`}
              >
                GitHub
              </Button>
            </ListItem>
          ))} */}
        </List>
      </CardContent>
    </Card>
  );
}

function getCreditsCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Credits
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Project is a Fork of " />
            <Button size="small" color="primary" href="https://github.com/freeboardgames/FreeBoardGames.org">
              FreeBoardGames.org
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
