import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileMemberPage } from './profile-member.page';

describe('ProfileMemberPage', () => {
  let component: ProfileMemberPage;
  let fixture: ComponentFixture<ProfileMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
