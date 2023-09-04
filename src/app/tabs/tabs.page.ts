import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { PlayerService } from '../player.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs!: IonTabs;
  progress=42;
  selected: any = '';
constructor(private player: PlayerService){

//  const play: Subscription = this.player.notifyOutputComponent.subscribe((latestObject:any) => {     
//      console.log('Latest object:', latestObject);    
//     // You can update your UI to display the latest object here  
//     });
  }

  setSelectedTab() {
    console.log("CALLED");
    this.selected = this.tabs.getSelected();
  }
  
}
