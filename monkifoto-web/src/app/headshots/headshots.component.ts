import { Component } from '@angular/core';

@Component({
  selector: 'app-headshots',
  templateUrl: './headshots.component.html',
  styleUrls: ['./headshots.component.scss']
})
export class HeadshotsComponent {

  images  = [
  ["../assets/images/headshots/_MKY0072-Edit.jpg",
  "../../assets/images/headshots/_MKY0121-Edit_132337.jpg",
  "../../assets/images/headshots/_MKY0171-Edit.jpg",
  "../../assets/images/headshots/_MKY0196-Edit_132338.jpg",
  "../../assets/images/headshots/_MKY0378-Edit.jpg",]
  ,
  ["../../assets/images/headshots/_MKY1477-Edit.jpg",
  "../../assets/images/headshots/_MKY1670-Edit.jpg",
  "../../assets/images/headshots/_MKY1676-Edit-2.jpg",
  "../../assets/images/headshots/_MKY2607-Edit.jpg",
  "../../assets/images/headshots/_MKY9096-Edit.jpg",]
  ,
  ["../../assets/images/headshots/MKI09062-Edit.jpg",
  "../../assets/images/headshots/MKI09066-Edit.jpg",
  "../../assets/images/headshots/MKI09165-Edit.jpg",
  "../../assets/images/headshots/MKY_3371-Edit copy.jpg",
  "../../assets/images/headshots/MKY08729-Edit.jpg"]
  ,
  ["../../assets/images/headshots/_MKY1477-Edit.jpg",
  "../../assets/images/headshots/_MKY1670-Edit.jpg",
  "../../assets/images/headshots/_MKY1676-Edit-2.jpg",
  "../../assets/images/headshots/_MKY2607-Edit.jpg",
  "../../assets/images/headshots/_MKY9096-Edit.jpg",]

];


showImages(){

}

ngOnInit(): void {
  this.showImages();
}

}












