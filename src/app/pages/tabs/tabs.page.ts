import { Component, OnInit, ViewChild,NgZone } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  showFab: boolean = true;
  selectTab: any;

  constructor(
    private zone: NgZone
  ) { }

  async ngOnInit() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });    
  }

  ionViewDidEnter() {
    Keyboard.addListener('keyboardDidShow', () => {
      this.zone.run(() => {
        this.showFab = false;
      });
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.zone.run(() => {
        this.showFab = true; 
      });
    });   
  }
  
  @ViewChild('tabs') tabs: any;
  setCurrentTab(event: any) {
    console.log(event);    
    this.selectTab = this.tabs.getSelected();
  }

}
