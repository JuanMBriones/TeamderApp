import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
import { TeamMembersPage } from 'src/app/modals/team-members/team-members.page';
import { ProfileMemberPage } from 'src/app/modals/profile-member/profile-member.page';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  ngOnInit() {
  }

  speakers: any[] = [];

  constructor(public confData: ConferenceData, private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    // getSpeakers
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }


  async openModalProfile() {
    const modal = this.modalCtrl.create({
      component: ProfileMemberPage
    });

    (await modal).present();
  }
}
