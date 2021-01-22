import { LightningElement } from "lwc";

const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";

export default class BoatTile extends LightningElement {
  
  boat;
  selectedBoatId;

  // Getter for dynamically setting the background image for the picture
  get backgroundStyle() {
    // background-image: url('https://salesforceDomain/resource/"generatedID"/StaticResourceFile/img.jpg');
    return "background-image:url(" + this.boat.Picture__c + ")";
  }

  // Getter for dynamically setting the tile class based on whether the
  // current boat is selected
  get tileClass() {
    return this.selectedBoatId === this.boat.Id ? 
        TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;
  }

  // Fires event with the Id of the boat that has been selected.
  selectBoat() {
    // this.selectedBoatId = this.boat.Id;
    const boatselect = new CustomEvent("boatselect", {
      boatId: this.selectedBoatId
    });
    this.dispatchEvent(boatselect);
  } 
}