import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

    // router.events.subscribe({
    //   next: e => console.log(e)
    // });

    // router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
    //   console.log(e.id, e.url);
    // });
  }

  ngOnInit() {
    // console.log(this.route);
    // console.log(this.location);
    // this.router.events.subscribe({
    //   next: e => console.log(e)
    // });
  }

}
