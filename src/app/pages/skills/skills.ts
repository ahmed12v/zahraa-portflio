import { AfterViewInit, Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directive';

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements AfterViewInit {

  showSkills = signal(false);

ngAfterViewInit() {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        this.showSkills.set(true);
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(document.querySelector('.skills-section')!);
}

}
