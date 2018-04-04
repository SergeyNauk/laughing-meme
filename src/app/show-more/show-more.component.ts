import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit, OnDestroy {
  userId: any;

  constructor() {
  }

  @ViewChild("userId")
  idUser: ElementRef;

  @ViewChild("userName")
  nameUser: ElementRef;

  @ViewChild("userEmail")
  emailUser: ElementRef;

  @ViewChild("userPhone")
  phoneUser: ElementRef;

  @ViewChild("userStatus")
  statusUser: ElementRef;

  saveChanges() {
    let newUserName = this.nameUser.nativeElement.textContent;
    let newUserEmail = this.emailUser.nativeElement.textContent;
    let newUserPhone = this.phoneUser.nativeElement.textContent;
    let newUserStatus = this.statusUser.nativeElement.value;

    let userArr = JSON.parse(localStorage.getItem('localArr'));

    userArr.forEach((elem) => {
        if (elem.id == this.userId) {
          elem.name = newUserName;
          elem.email = newUserEmail;
          elem.phone = newUserPhone;
          elem.status = newUserStatus;

          let userName = document.querySelector(`.name_${elem.id}`);
          let userEmail = document.querySelector(`.email_${elem.id}`);
          let userStatus = document.querySelector(`.status_${elem.id}`);

          userName.textContent = newUserName;
          userEmail.textContent = newUserEmail;
          userStatus.textContent = newUserStatus;
        }
    });

    localStorage.setItem('localArr', JSON.stringify(userArr));
  }

  showInfo() {
  let userArr = JSON.parse(localStorage.getItem('localArr'));

  userArr.forEach((elem) => {
    if (elem.id == this.userId) {
      this.idUser.nativeElement.textContent = elem.id;
      this.nameUser.nativeElement.textContent = elem.name;
      this.emailUser.nativeElement.textContent = elem.email;
      this.phoneUser.nativeElement.textContent = elem.phone;
      this.statusUser.nativeElement.value = elem.status;
    }
  });
}

ngOnInit() {
    let wrapperTable = document.querySelector('.wrapperTable');
    wrapperTable.classList.toggle('add');

    let path = document.location.href;
    let splitArr = path.split('-');
    this.userId = splitArr[1];

    this.showInfo();
  }

  ngOnDestroy() {
    document.querySelector('.wrapperTable').classList.toggle('add');
  }
}
