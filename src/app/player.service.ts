import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _players = [
    {
      order: 1,
      name: 'archie',
      id: 1,
    },
    {
      order: 2,
      name: 'william',
      id: 2,
    },
    {
      order: 3,
      name: 'max',
      id: 3,
    },
    {
      order: 4,
      name: 'charlie',
      id: 4,
    },
    {
      order: 5,
      name: 'riley',
      id: 5,
    },
    {
      order: 6,
      name: 'mason',
      id: 6,
    },
  ];

  get players(): any[] {
    return this._players;
  }

  moveAfter(playerId: number, index: number) {
    console.log('args', playerId, index);
    const player = this._players.filter((player) => player.id === playerId)[0];
    console.log('player', player);
    const playersLeft = this._players
      .filter((player) => player.id !== playerId)
      .sort(this.compare);
    const indexOf = playersLeft.findIndex((player) => player.order === index);
    console.log('players', playersLeft);
    let order = 1;
    playersLeft.splice(indexOf + 1, 0, player);
    console.log('ap', playersLeft);
    const allPlayers = playersLeft.map((player) => {
      player.order = order;
      order = order + 1;
      return player;
    });
    console.log('all players', allPlayers);

    this._players = allPlayers;
  }

  compare(a, b) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  }
}
