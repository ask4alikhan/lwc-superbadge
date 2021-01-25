// apexWireMethodToFunction.js
import { LightningElement, wire } from 'lwc';
// import getContactList from '@salesforce/apex/ContactController.getContactList';
// import getContactListFiletered from '@salesforce/apex/ContactController.getContactListFiletered';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
// import getBoats from '@salesforce/apex/ContactController.getBoats';
// import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';



export default class ApexWireMethodToFunction extends LightningElement {
    contacts;
    error;

    // @wire(getContactList, )
    // @wire(getContactListFiletered, { searchString: 'bhatt' })
    @wire(getBoats, { boatTypeId: '' })
    wiredContacts({ error, data }) {
            console.log('error', error);
            console.log('data', data);
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}