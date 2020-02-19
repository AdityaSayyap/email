import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
declare var Email;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {

  }

  emailTrigger() {
    console.log('email');

    // // function sendEmail() {
    //   Email.send({
    //   Host: "smtp.gmail.com",
    //   Username : "s.adityavarma@gmail.com",
    //   Password : "sayyaparaaju",
    //   To : 'aditya.sayyaparaju@sumtotalsystems.com',
    //   From : "s.adityavarma@gmail.com",
    //   Subject : "sdaljfgasdojgfjahg",
    //   Body : "mmbm>",
    //   }).then(
    //     message => alert("mail sent successfully")
    //   );
    // // }

    this.emailComposer.isAvailable()
    let email = {
      to: 'aditya.sayyaparaju@sumtotalsystems.com',
      cc: '',
      bcc: [''],
      attachments: [],
      subject: 'Cordova Icons',
      body: '<style media="all" type="text/css"> .activity-image{ height: 115px; width: 212px; background: linear-gradient(120deg, silver, #e7e7e7, #fff, #f0f0f0, #dcdcdc); } .activity-card { width: 212px; border-radius: 4px; box-shadow: 1px 3px 3px 3px #E3E3E3; margin: 15px; } .activity-card img { max-width: 100%; border-radius: 4px 4px 0px 0px; } .activity-details .name{ color: #3378BA; font-family: Open Sans,Tahoma,Geneva,sans-serif; font-weight: bold; font-size: 12px; } .activity-details .type{ color: #2A2A2A; font-family: Open Sans,Tahoma,Geneva,sans-serif; font-size: 12px; } .activity-details { padding: 6px; } </style> <div class="activity-card"> <div class="activity-image"> <img src="https://media.istockphoto.com/photos/panorama-format-photo-of-an-empty-old-wooden-dock-on-harrison-lake-picture-id1142712120?k=6&m=1142712120&s=612x612&w=0&h=8VfdEpu0etJttZpfOGaCr9YXqjLKy9WEIZreRxR0p18="> </div> <div class="activity-details"> <p class="name">Activity Name</p> <p class="type">Course Type</p> <span> <i class="fa fa-star"></i> </span> </div> </div>',
      isHtml: true,
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
    this.emailComposer.requestPermission().then(permission => {
      console.log('sahgdsf', permission);
    });
  }

}
