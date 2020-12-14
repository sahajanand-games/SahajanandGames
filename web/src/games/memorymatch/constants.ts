import { blue, red } from '@material-ui/core/colors';


const _content = {}; 
for (let i = 0; i < 23; i++){
  _content[`murti_${i}`] = require(`./media/murti/hari_${i}.png`);
}
export const CARD_CONTENT = _content;


export const PLAYER_COLORS = {
  '0': blue[500],
  '1': red[500],
};
