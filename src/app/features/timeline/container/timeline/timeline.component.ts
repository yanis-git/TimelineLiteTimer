import {Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {TimelineLite, Linear} from 'gsap';

@Component({
  selector: 'app-timeline',
  template: `
    <div class="progress_container">
      <div #progress class="progress-bar"></div>
    </div>
    <p>Time: {{time | number: '1.3-3'}}</p>
  `,
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {

  @ViewChild('progress') progressElement: ElementRef;
  public timeline = new TimelineLite();
  public time: number;
  constructor(private changeRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.start();
  }

  start() {
    this.timeline.eventCallback('onUpdate', () => {
      this.time = this.timeline.time();
      this.changeRef.detectChanges();
    }, [] );

    // Here i use the ViewChild Binding instead of pure javascript fetching.
    this.timeline.fromTo(this.progressElement.nativeElement, 10, {
      width: 0
    }, {
      width: '100%',
      ease: Linear.easeInOut
    });
  }
}
