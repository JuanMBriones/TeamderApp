import { Component, OnInit } from '@angular/core';
import { ConferenceData } from 'src/app/providers/conference-data';


@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {


  ngOnInit() {
  }

  speakers: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    // getSpeakers
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

}

