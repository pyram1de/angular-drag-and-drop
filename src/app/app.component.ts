import { Component, VERSION } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private playerService: PlayerService) {}
  get players() {
    return this.playerService.players;
  }

  trackByOrder(index, player) {
    return player ? player.order : undefined;
  }
}
