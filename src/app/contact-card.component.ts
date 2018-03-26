import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Contact } from './contact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck'

@Component({
    selector:'contact-card',
    template:`
        <div class="contact-card">
            <p>{{ selectedContact.name }} ( {{ selectedContact.age }} )</p>
            <p>{{ selectedContact.email }}</p>
        </div>
        <button (click) = "sendNotification()">Notify my parent!</button>        
        `,
    providers:[ContactService]
})

export class ContactCardComponent implements OnInit{
    id : string;
    selectedContact : Contact;

    @Output() notifyParentComponent : EventEmitter<any> = new EventEmitter();

    constructor(private route : ActivatedRoute,private _contactService : ContactService){
    } 

    ngOnInit(){
        this._contactService.getContact(+this.route.snapshot.params['id'])
            .then(contact => this.selectedContact = contact);
    }
    sendNotification(){
        this.notifyParentComponent.emit('Emitted some value to the parent');
    }
}