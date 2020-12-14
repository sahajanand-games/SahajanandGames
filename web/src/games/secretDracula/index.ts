const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const secretDraculaGameDef: IGameDef = {
  urlName: 'secret-kusang',
  code: 'secretDracula',
  name: 'Secret Kusang',
  imageURL: Thumbnail,
  modes: [
    { mode: GameMode.OnlineFriend },
    // Local mode is quite helpful during development
    // { mode: GameMode.LocalFriend }
  ],
  minPlayers: 5,
  maxPlayers: 10,
  description: 'સત્સંગમાં કુસંગ ને ઓળખતા શીખો!',
  descriptionTag: 'Secret Kusang',
  instructions: {
    // videoId: 'mbGXIDYdtas',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default secretDraculaGameDef;
