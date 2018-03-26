import { Component,OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/contact-list">Contact List</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent{
  title = 'Welcome to my Dream App!';
}
