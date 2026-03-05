import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  }
  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  openMycv(){
    window.open("https://drive.google.com/file/d/1l3B-vb80pB8G4MnklbVgYZMUh7wgNU2H/view?usp=sharing", "_blank");
  }

  scrollTo(section: string) {
  const element = document.getElementById(section);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }}

}
