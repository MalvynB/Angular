import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  itemStringArray = ['Type', 'RPG', 'FPS', 'Jeu de platforme'];

  itemGameArray = [{
      id: 1,
      nom: 'Call of Duty',
      type: 'FPS',
      note: 8,
      src: 'https://specials-images.forbesimg.com/imageserve/5ce8218fcd1f12000a2a49a4/960x0.jpg?fit=scale',
      description:'Lorem, consectetur adipiscing elit. Aenean ut ipsum dolor sit, consectetur adipiscing elit. Aenean ut amet, consectetur adipiscing elit. Aenean ut'
  }, {
      id: 2,
      nom: 'Call of Duty II',
      type: 'FPS',
      note: 7.5,
      src: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1575/15759911/3598158-call-duty-mobile-review-thumb-nologo.jpg',
      description:'Lorem ipsum , consectetur adipiscing elit. Aenean utdolor sit amet, consectetur, consectetur adipiscing elit. Aenean ut adipiscing elit. Aenean ut'
  }, {
      id: 3,
      nom: 'Call of Duty III',
      type: 'FPS',
      note: 9,
      src: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-02-26-12-24/call-of-duty-modern-warfare-4-release-date-multiplayer-singleplayer-en-alles-wat-we-weten-1551183878831.jpg/EG11/thumbnail/750x422/format/jpg/quality/60',
      description:'Lorem, consectetur, consectetur adipisciing elit. Aenean ut ipsum dolor, consectetur adipiscing elit. Aenean ut sit amet, consectetur adipiscing elit. Aenean ut'
  }, {
    id: 4,
    nom: 'Call of Duty II',
    type: 'FPS',
    note: 7.5,
    src: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1575/15759911/3598158-call-duty-mobile-review-thumb-nologo.jpg',
    description:'Lorem ipsum , consectetur adipiscing elit. Aenean utdolor sit amet, consectetur, consectetur adipiscing elit. Aenean ut adipiscing elit. Aenean ut'
}, {
    id: 5,
    nom: 'Call of Duty III',
    type: 'FPS',
    note: 9,
    src: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-02-26-12-24/call-of-duty-modern-warfare-4-release-date-multiplayer-singleplayer-en-alles-wat-we-weten-1551183878831.jpg/EG11/thumbnail/750x422/format/jpg/quality/60',
    description:'Lorem, consectetur, consectetur adipisciing elit. Aenean ut ipsum dolor, consectetur adipiscing elit. Aenean ut sit amet, consectetur adipiscing elit. Aenean ut'
}, {
    id: 6,
    nom: 'Call of Duty',
    type: 'FPS',
    note: 8,
    src: 'https://specials-images.forbesimg.com/imageserve/5ce8218fcd1f12000a2a49a4/960x0.jpg?fit=scale',
    description:'Lorem, consectetur adipiscing elit. Aenean ut ipsum dolor sit, consectetur adipiscing elit. Aenean ut amet, consectetur adipiscing elit. Aenean ut'
}];

  constructor() { }

  ngOnInit() {
  }

}
