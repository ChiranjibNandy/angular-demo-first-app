import {Injectable} from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mock-contacts';

@Injectable()
export class ContactService{
    getContacts() : Contact[]{
        return Contacts;
    } 

    getContact(id : number) : Promise<Contact>{
        return this.getContactsSlowly().
            then(contacts => contacts.find(contact => contact.id == id));
    }

    getContactsSlowly() : Promise<Contact[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getContacts()),1000);
        });
    }
}