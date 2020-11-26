import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamMembersPage } from 'src/app/modals/team-members/team-members.page';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  ngOnInit() {
  }
  speakers: any[] = [];

  constructor(public confData: ConferenceData, private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    // getSpeakers
    this.confData.getTeams().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  async openModalMembers() {
    const modal = this.modalCtrl.create({
      component: TeamMembersPage
    });

    (await modal).present();
  }

}
