import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    clickedWet = true;
    clickedBrush = false;
    clickedHolder = false;

    handleWet() {
        this.clickedWet = true;
        this.clickedBrush = false;
        this.clickedHolder = false;
    }
    handleBrush() {
        this.clickedWet = false;
        this.clickedBrush = true;
        this.clickedHolder = false;
    }
    handleHandle() {
        this.clickedWet = false;
        this.clickedBrush = false;
        this.clickedHolder = true;
    }
}