import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Draggable } from './dragable.directive';
import { Dropable } from './dropable.directive';
import { PlayerService } from './player.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Draggable, Dropable],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
