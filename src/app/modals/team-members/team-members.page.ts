import { Component, OnInit } from '@angular/core';
import { ConferenceData } from 'src/app/providers/conference-data';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {


  ngOnInit() {
  }

  speakers: any[] = [];

  constructor(public confData: ConferenceData, private dataService: DataService) {}

  ionViewDidEnter() {
    // getSpeakers
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

  }

}

