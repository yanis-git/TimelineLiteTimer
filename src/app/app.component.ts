import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {Linear, TimelineLite} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  @ViewChild('progress') progressElement: ElementRef;

  public timeline = new TimelineLite();
  public time = 0;
  constructor(private changeRef: ChangeDetectorRef) { }
  ngAfterViewInit() {
    this.start();
  }

  start() {
    this.timeline.eventCallback('onUpdate', () => {
      this.time = this.timeline.time();
      this.changeRef.detectChanges();
    }, [] );
    this.timeline.fromTo(this.progressElement.nativeElement, 10, {width: '100%'}, {width: 0, ease: Linear.easeNone});
  }
}
