import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // lets add an animation
  animations: [
    trigger('SlideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(120%,0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'app';
  menuState:string = 'out';
  toggleMenu() {
    // if statement that toggles the value
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
