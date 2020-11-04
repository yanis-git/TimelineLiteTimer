import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './container/timeline/timeline.component';



@NgModule({
  declarations: [TimelineComponent],
  exports: [TimelineComponent],
  imports: [
    CommonModule
  ]
})
export class TimelineModule { }
