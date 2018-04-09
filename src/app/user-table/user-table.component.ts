import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})

export class UserTableComponent implements OnInit {
  users: any;

  constructor(private getInfoService: GetInfoService) {
  }

  setUsers(data) {
    this.users = data;

    this.saveUsers();
  }

  refreshUserTable() {
    this.getInfoService.getValue().subscribe(data => {
      this.setUsers(data);
    });
  }

  saveUsers() {
    this.getInfoService.saveUsersArr(this.users);
  }

  ngOnInit() {
    /*localStorage.clear();*/
    let saveArr = JSON.parse(localStorage.getItem('localArr'));

    if (saveArr == null) {
      this.getInfoService.getValue().subscribe(data => {
        this.setUsers(data);
      });
    } else {
      this.users = saveArr;
    }
  }
}
