import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { TeamMembersPage } from 'src/app/modals/team-members/team-members.page';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  ngOnInit() {
    //console.log(this.dataSrv.getAPIObject('equipos').forEach);
  }
  speakers: any[];

  constructor(public confData: ConferenceData, private modalCtrl: ModalController, private dataSrv: DataService) {}

  ionViewDidEnter() {
    // getSpeakers
    this.dataSrv.getTeams().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
    /*this.dataSrv.getAPIObject('equipos').forEach((campo: any[]) => {
      this.speakers = campo;
    });*/
  }

  async openModalMembers() {
    const modal = this.modalCtrl.create({
      component: TeamMembersPage
    });

    (await modal).present();
  }

}
