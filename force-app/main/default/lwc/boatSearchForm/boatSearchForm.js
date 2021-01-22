// imports
import {
  APPLICATION_SCOPE,
  createMessageContext,
  MessageContext,
  publish,
  releaseMessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";
import BOATMC from "@salesforce/messageChannel/BoatMessageChannel__c";
import { LightningElement, wire } from "lwc";
import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes";

export default class BoatSearchForm extends LightningElement {
  selectedBoatTypeId = "";

  // Private
  error = undefined;
  searchOptions;

  // Wire a custom Apex method
  @wire(getBoatTypes)
  boatTypes({ error, data }) {
    if (data) {
      this.searchOptions = data.map((type) => {
        return { label: type.Name, value: type.Id };
      });
      this.searchOptions.unshift({ label: "All Types", value: "" });
    } else if (error) {
      this.searchOptions = undefined;
      this.error = error;
    }
  }

  // Fires event that the search option has changed.
  // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
  handleSearchOptionChange(event) {
    // Prevents the anchor element from navigating to a URL.
    // event.preventDefault();

    this.selectedBoatTypeId = event.detail.value;

    // Create the const searchEvent
    // searchEvent must be the new custom event search
    const searchEvent = new CustomEvent("search", {
      boatTypeId: event.detail.value
    });
    this.dispatchEvent(searchEvent);
  }
}