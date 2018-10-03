import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;

  constructor() { }

  ngOnInit() {
  }

}
