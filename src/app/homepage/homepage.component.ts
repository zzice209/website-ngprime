import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isActiveInput;
  isActiveButton;
  isActiveMenuButton;

  activeClick() {
    this.isActiveInput = !this.isActiveInput;
  }

  activeButtonClick() {
    this.isActiveButton = !this.isActiveButton;
  }

  activeMenuButtonClick() {
    this.isActiveMenuButton = !this.isActiveMenuButton;
  }

  constructor() {
    this.isActiveInput = false;
    this.isActiveMenuButton = false;
    this.isActiveButton = false;
  }

  ngOnInit() {
  }

}
