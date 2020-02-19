import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { c } from '@angular/core/src/render3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {

  }

  emailTrigger() {
    console.log('email');
    let email = {
      to: 'aditya.sayyaparaju@sumtotalsystems.com',
      cc: '',
      bcc: [''],
      attachments: [],
      subject: 'Cordova Icons',
      body: '<table align="center" border="1" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;"> <tr>  <td>   Hello!  </td> </tr></table>',

      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
    this.emailComposer.requestPermission().then(permission => {
      console.log('sahgdsf', permission);
    });
  }

}
