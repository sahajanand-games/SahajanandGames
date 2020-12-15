import { NUM_MURTIS } from '../constants';
const _murtis = {};
for (let i = 0; i < NUM_MURTIS; i++) {
  _murtis[`murti_${i}`] = require(`../media/murti/hari_${i}.jpg`);
}
export const MURTIS = _murtis;
