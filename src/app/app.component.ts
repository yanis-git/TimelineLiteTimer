import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TimelineLite, Linear} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('progress') progressElement: ElementRef;

  public timeline = new TimelineLite();

  ngAfterViewInit() {
    this.start();
  }

  start() {
    this.timeline.fromTo(this.progressElement.nativeElement, 10, {width: '100%'}, {width: 0, ease: Linear.easeNone});
  }
}
