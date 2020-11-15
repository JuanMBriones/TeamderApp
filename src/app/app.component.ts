import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Teams',
      url: 'teams',
      icon: 'people'
    },
    {
      title: 'Match',
      url: 'match',
      icon: 'flame'
    },
    {
      title: 'Meetings',
      url: 'meetings',
      icon: 'calendar'
    }
  ];
  public userPages = [
    {
      title: 'Profile',
      url: 'profile',
      icon: 'person-circle'
    },
    {
      title: 'Login',
      url: 'login',
      icon: 'finger-print'
    },
    {
      title: 'Logout',
      url: 'logout',
      icon: 'finger-print'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
