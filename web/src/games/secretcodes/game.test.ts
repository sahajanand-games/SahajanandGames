import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import { Ctx } from 'boardgame.io';
import { TeamColor } from './definitions';

describe('secret codes rules', () => {
  it('should work for a simple game', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.moves.startGame();
    client.moves.pass(); // pass turn to red team
    client.moves.chooseCard(0); // red card, correct.
    client.moves.chooseCard(2); // red card, correct.
    client.moves.chooseCard(5); // red card, correct.
    client.moves.chooseCard(1); // civilian card, mistake.
    client.moves.chooseCard(4); // blue card, correct.
    client.moves.chooseCard(11); // blue card, correct.
    client.moves.pass();
    client.moves.chooseCard(3); // civilian card, mistake.
    client.moves.chooseCard(12); // blue card, correct.
    client.moves.pass();
    client.moves.chooseCard(8); // civilian card, mistake.
    client.moves.chooseCard(23); // blue card, correct.
    client.moves.chooseCard(21); // blue card, correct.
    client.moves.chooseCard(19); // blue card, correct.
    client.moves.chooseCard(18); // blue card, correct.
    client.moves.chooseCard(16); // blue card, correct. Blue wins.

    const ctx: Ctx = client.store.getState().ctx;
    expect(ctx.gameover.winner.color).toEqual(TeamColor.Blue);
  });

  it('should lose if select assassin', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.moves.startGame();
    client.moves.pass(); // pass turn to red team
    client.moves.chooseCard(0); // red card, correct.
    client.moves.chooseCard(2); // red card, correct.
    client.moves.chooseCard(5); // red card, correct.
    client.moves.chooseCard(1); // civilian card, mistake.
    client.moves.chooseCard(4); // blue card, correct.
    client.moves.chooseCard(11); // blue card, correct.
    client.moves.pass();
    client.moves.chooseCard(3); // civilian card, mistake.
    client.moves.chooseCard(12); // blue card, correct.
    client.moves.pass();
    client.moves.chooseCard(8); // civilian card, mistake.
    client.moves.chooseCard(23); // blue card, correct.
    client.moves.chooseCard(21); // blue card, correct.
    client.moves.chooseCard(15); // assassin card, loses the game.

    const ctx: Ctx = client.store.getState().ctx;
    expect(ctx.gameover.winner.color).toEqual(TeamColor.Red);
  });
});
