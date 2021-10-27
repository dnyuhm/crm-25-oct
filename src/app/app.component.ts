import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title: string = 'crm';
  private obs = new Observable((listX) => {
    listX.next(Math.random());
  });
  private subj = new Subject();
  private behav = new BehaviorSubject(3);
  // private sub: Subscription; unsubscribe exemple
  constructor() {
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto');
    // this.subj.next('tutu');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.behav.next(1);
    // this.behav.subscribe((data) => console.log(data));
    // this.behav.next(2);
    // this.behav.next(Math.random());
    // this.sub = this.behav.subscribe((data) => console.log(data));  unsubscribe exemple
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe(); unsubscribe exemple
  }
}
