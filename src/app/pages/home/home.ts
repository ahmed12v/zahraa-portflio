import { Component } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Experince } from '../experince/experince';
import { Footer } from '../footer/footer';
import { Nav } from '../nav/nav';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    About,
    Contact,
    Experince,
    Footer,
    Nav,
    Skills,
    Projects
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
