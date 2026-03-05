import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import emailjs from '@emailjs/browser';



@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   loading = signal(false);
  contactForm = new FormGroup({

    name: new FormControl('' , Validators.required),
    email: new FormControl('' , [Validators.required , Validators.email]),
    message: new FormControl('' , Validators.required),

  });

  // sendMassage(){
  //   if(this.contactForm.invalid)return;
  //   this.loading.set(true);
  //   emailjs.send('service_f9rhppp', 'template_jllh7lo', {
  //     name: this.contactForm.value.name,
  //     email: this.contactForm.value.email,
  //     message: this.contactForm.value.message,
  //   }, '2OASBtK5jBRxjGJPv')
  //   .then((response) => {
  //     this.contactForm.reset();
  //     this.loading.set(false);
  //     alert('Message sent successfully!');
  //   }, (err) => {
  //     this.loading.set(false);
  //     alert('Failed to send message. Please try again later.');
  //   });
    
  // }
}
