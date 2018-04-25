import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.getContacts();
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  }

}
