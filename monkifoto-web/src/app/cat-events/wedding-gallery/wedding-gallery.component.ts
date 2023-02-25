import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-gallery',
  templateUrl: './wedding-gallery.component.html',
  styleUrls: ['./wedding-gallery.component.scss']
})
export class WeddingGalleryComponent {

  wedding = [
    ["../assets/images/wedding-portfolio/DSC_3898-Edit.jpg",
  "../assets/images/wedding-portfolio/DSC00015.jpg",
  "../assets/images/wedding-portfolio/DSC00192-Edit-2.jpg",
  "../assets/images/wedding-portfolio/EB6I0363.jpg",
  "../assets/images/wedding-portfolio/MKI00184-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00207.jpg",
  "../assets/images/wedding-portfolio/MKI03498-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00226-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00263-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00278-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00333.jpg",
  "../assets/images/wedding-portfolio/MKI05914.jpg",
  "../assets/images/wedding-portfolio/MKY00490-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00495-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00521-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00543-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00556-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY09143-Edit.jpg",
"../assets/images/wedding-portfolio/MKY08862-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09003-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09008-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09086.jpg",
"../assets/images/wedding-portfolio/MKY09143-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09003-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09008-Edit.jpg",
],
  


  ["../assets/images/wedding-portfolio/MKI02705-Edit.jpg",
  "../assets/images/wedding-portfolio/EB6I0911-Edit-2.jpg",
  "../assets/images/wedding-portfolio/EB6I1021-Edit.jpg",
  ".../assets/images/wedding-portfolio/MKI00098-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00443-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00513-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00537-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00567-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI05917.jpg",
  "../assets/images/wedding-portfolio/MKI05962-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI05987-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06029.jpg",
  "../assets/images/wedding-portfolio/MKY00577-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00579-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00623-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00687-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00829.jpg",
  "../assets/images/wedding-portfolio/MKY08862-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09003-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09008-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09086.jpg",
"../assets/images/wedding-portfolio/MKY09143-Edit.jpg",
"../assets/images/wedding-portfolio/MKY08862-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09086.jpg",
],



  ["../assets/images/wedding-portfolio/MKI00121-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI03481-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00604-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI00639-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI06044.jpg",
  "../assets/images/wedding-portfolio/MKI06045.jpg",
  "../assets/images/wedding-portfolio/MKI06049.jpg",
  "../assets/images/wedding-portfolio/MKI06060-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06069.jpg",
  "../assets/images/wedding-portfolio/MKI06075.jpg",
  "../assets/images/wedding-portfolio/MKI06076.jpg",
  "../assets/images/wedding-portfolio/MKI06255.jpg",
  "../assets/images/wedding-portfolio/MKY00850-Edit.jpg",
"../assets/images/wedding-portfolio/MKY00891-Edit.jpg",
"../assets/images/wedding-portfolio/MKY00946.jpg",
"../assets/images/wedding-portfolio/MKY00972-Edit.jpg",
"../assets/images/wedding-portfolio/MKY00993-Edit.jpg",
"../assets/images/wedding-portfolio/MKY00452.jpg",
"../assets/images/wedding-portfolio/MKY00470-Edit-2.jpg",
"../assets/images/wedding-portfolio/MKY08862-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09003-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09008-Edit.jpg",
"../assets/images/wedding-portfolio/MKY09086.jpg",
"../assets/images/wedding-portfolio/MKY09143-Edit.jpg"
 ],




  ["../assets/images/wedding-portfolio/MKI00855-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI02467.jpg",
  "../assets/images/wedding-portfolio/MKI05923.jpg",
  "../assets/images/wedding-portfolio/MKI00171-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI00179-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06036.jpg",
  "../assets/images/wedding-portfolio/MKI06037.jpg",
  "../assets/images/wedding-portfolio/MKI06257-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI06266-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKI06334.jpg",
  "../assets/images/wedding-portfolio/MKI06361-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06370.jpg",
  "../assets/images/wedding-portfolio/MKY01001-Edit-2.jpg",
  "../assets/images/wedding-portfolio/MKY01004-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY01034-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY01039-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY01051-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06695-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06728-Edit.jpg",
  "../assets/images/wedding-portfolio/MKI06998-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00382-Edit.jpg",
  "../assets/images/wedding-portfolio/MKY00393-Edit.jpg",]

 











];




}
