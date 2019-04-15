import {Component, OnInit} from '@angular/core';
import {TimelineLite, Linear} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public timeline = new TimelineLite();

  ngOnInit() {
    setTimeout(() => {
      this.start();
    }, 3000);
  }

  start() {
    const progress = document.getElementById('progress');
    this.timeline.fromTo(progress, 10, {width: '100%'}, {width: 0, ease: Linear.easeNone});
  }

}
