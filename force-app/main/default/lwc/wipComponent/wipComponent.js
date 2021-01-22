// apexWireMethodToFunction.js
import { LightningElement, wire } from 'lwc';
// import getContactList from '@salesforce/apex/ContactController.getContactList';
import getContactListFiletered from '@salesforce/apex/ContactController.getContactListFiletered';

export default class ApexWireMethodToFunction extends LightningElement {
    contacts;
    error;

    // @wire(getContactList, )
    @wire(getContactListFiletered, { searchString: 'bhatt' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}