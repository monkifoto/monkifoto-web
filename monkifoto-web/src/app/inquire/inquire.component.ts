import { Component } from '@angular/core';
import Typed  from 'typed.js';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})
export class InquireComponent {

    // myScriptElement:HTMLScriptElement;

    // constructor(){
    //   this.myScriptElement = document.createElement("script");
    //   this.myScriptElement.src = "./a";
    //   document.body.appendChild(this.myScriptElement);
    // }

    ngOnInit(){
      var typingEffect = new Typed(".multiText", {
          strings:["photographer", "coder", "writer", "designer"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1500
      });
    }

}
