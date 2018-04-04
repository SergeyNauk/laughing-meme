import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {
  constructor(private getInfoService: GetInfoService) {
  }

  renderTable() {
    let saveArr = JSON.parse(localStorage.getItem('localArr'));

    saveArr.forEach((elem) => {
      let userId = document.querySelector(`.id_${elem.id}`);
      let userName = document.querySelector(`.name_${elem.id}`);
      let userEmail = document.querySelector(`.email_${elem.id}`);
      let userStatus = document.querySelector(`.status_${elem.id}`);

      userId.textContent = elem.id;
      userName.textContent = elem.name;
      userEmail.textContent = elem.email;
      userStatus.textContent = elem.status;
    });
  }

  saveUsersArr(data) {
    let serializeUserArr = JSON.stringify(data);

    localStorage.setItem('localArr', serializeUserArr);

    this.renderTable();
  }

  refactorUserArr(data) {
    data.forEach((elem) => {
      elem.status = 'user';
    });

    this.saveUsersArr(data);
  }

  ngOnInit() {
    /*localStorage.clear();*/
    let saveArr = JSON.parse(localStorage.getItem('localArr'));

    if (saveArr == null) {
      this.getInfoService.getValue().subscribe(data => {
        this.refactorUserArr(data);
      });
    } else {
      this.renderTable();
    }
  }
}
