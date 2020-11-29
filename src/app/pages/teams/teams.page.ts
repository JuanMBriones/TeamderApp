import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { TeamMembersPage } from 'src/app/modals/team-members/team-members.page';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})


export class TeamsPage implements OnInit {

  public speakers: Teams[] = [];
  ngOnInit() {
    //console.log(this.dataSrv.getAPIObject('equipos').forEach);
  }

  constructor(public confData: ConferenceData, private modalCtrl: ModalController, private dataService: DataService) {}

  ionViewDidEnter() {

    this.dataService.allTeams().subscribe(myData => {
      this.speakers = myData;
    });
  }

  async openModalMembers() {
    const modal = this.modalCtrl.create({
      component: TeamMembersPage
    });

    (await modal).present();
  }

}


interface Teams {
  id: number;
  name: string;
}

