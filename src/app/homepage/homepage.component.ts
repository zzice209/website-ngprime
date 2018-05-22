import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
    this.isActiveInput = false;
    this.isActiveMenuButton = false;
    this.isActiveButton = false;
  }

  ngOnInit() {
  }
  toLogin() {
    this.router.navigate(['/home/login']);
  }
}
