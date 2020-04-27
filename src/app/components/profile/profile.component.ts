import {Component, OnInit} from '@angular/core';
import {Profile} from '../../shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: Profile;
  defaultImage = '../../../assets/avatar_default.png';

  constructor() {
  }

  ngOnInit(): void {
    this.profileData = {
      name: 'John Papa',
      position: 'principal developer advocate lead',
      imgUrl: 'https://cdn.auth0.com/blog/guest-authors/john-papa.jpg',
      description: 'John Papa is a dedicated father and husband, a professional Web Developer, and avid OSS and community advocate. He currently is a Developer Advocate for Microsoft and has formerly worked for Disney on several web and mobile applications that you may have used. His passions are coding and teaching modern web technologies and enjoying everything Disney with his family. John is a co-host of the Real Talk JavaScript podcast, author of the Angular Style Guide, and many popular Pluralsight courses. You can reach John on Twitter at @john_papa.',
    };
  }

}
