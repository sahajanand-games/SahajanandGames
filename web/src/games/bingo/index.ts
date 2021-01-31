const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const BingoDef: IGameDef = {
  code: 'bingo',
  urlName: 'shreeji-darshan',
  name: 'Shreeji Darshan',
  contributors: ['gk-patel'],
  minPlayers: 2,
  maxPlayers: 30,
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }],
  description: 'ચાલો આંખો પાવન કરીએ શ્રીજીના દર્શનથી!',
  descriptionTag: 'Play shreeji darshan for free online with upto 30 persons.',
  instructions: {
    // videoId: 'dJ4YDTqmhJk',
    text: instructions,
  },
  config: () => import('./config'),
  status: IGameStatus.PUBLISHED,
};

export default BingoDef;
