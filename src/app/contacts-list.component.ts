import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ContactService } from './contact-service';

@Component({
    selector:'contacts-list',
    styles: [`
    .odd { background: purple; color: #fff; }
    .even { background: red; color: #fff; }
    `],
    template:`
    <div class="app">
      <ul>
        <li *ngFor = "let contact of contacts ;trackBy : trackById;let i = index;let c = count;let e = even; let o = odd;"
          [ngClass] = "{
            odd : o,
            even: e
          }">
          Index : {{i}}
          Count : {{c}}
          <a [routerLink] = "['/contact-details',contact.id]">
            {{contact.name}}
          </a>
        </li>
      </ul>
    </div>
    `,
    providers:[ContactService]
})

export class ContactsListComponent {
  // contacts: Observable<Contact[]>;
  contacts : Contact[];
  constructor(private _contactService : ContactService){}

  getContacts():void {
    this._contactService.getContactsSlowly().then(contacts => this.contacts = contacts);
  };

  ngOnInit() : void {
    this.getContacts();
    // this.contacts = Observable.of([
    //   {
    //     "id": 1,
    //     "name": "Laura",
    //     "email": "lbutler0@latimes.com",
    //     "age": 47
    //   },
    //   {
    //     "id": 2,
    //     "name": "Walter",
    //     "email": "wkelley1@goodreads.com",
    //     "age": 37
    //   },
    //   {
    //     "id": 3,
    //     "name": "Walter",
    //     "email": "wgutierrez2@smugmug.com",
    //     "age": 49
    //   },
    //   {
    //     "id": 4,
    //     "name": "Jesse",
    //     "email": "jarnold3@com.com",
    //     "age": 47
    //   },
    //   {
    //     "id": 5,
    //     "name": "Irene",
    //     "email": "iduncan4@oakley.com",
    //     "age": 33
    //   }      
    // ]);
   }

   getNotification(evt){
    console.log("In Parent -- ",evt);     
   }

   trackById(index,contact){
      return contact.id;
   }
}