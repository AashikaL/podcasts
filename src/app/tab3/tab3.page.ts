import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  editLibraryClicked = false;

  constructor() { }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
  public alertButtons = [{
    text: 'Cancel',
    role: 'cancel'
  },
  {
    text: 'Save',
    role: 'confirm',
  }];
  public alertInputs = [
    {
      placeholder: 'Title',
    }
  ];
  public alertButton = [{
    text: 'Cancel',
    role: 'cancel'
  },
  {
    text: 'Follow',
    role: 'confirm',
  }];
  public alertInput = [
    {
      placeholder: 'Follow a Show by URL..',
    }
  ];
}
