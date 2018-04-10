import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { GetInfoService } from '../get-info.service';


@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {
  private id: number;
  private subscription: Subscription;
  private path: string;
  private user: object;

  constructor(
    private activateRoute: ActivatedRoute,
    private getInfoService: GetInfoService,

  ) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.path = activateRoute.snapshot.url[0].path;
  }

  @ViewChild('wrapperMore')
  wrapEl: ElementRef;

  saveChanges() {
    this.getInfoService.saveUserChanges(this.user, this.id);
  }

  removeUser() {
    this.getInfoService.deleteUser(this.id);
  }

  ngOnInit() {
    if (this.path != 'new') {
      this.user = this.getInfoService.getUserData(this.id);

      this.user == undefined ? this.wrapEl.nativeElement.innerHTML = '<div class="sorry">sorry, user not found :(</div>' : this.user; // if the remote user path was entered
    } else {
      let maxId = this.getInfoService.getMaxUserId();

      this.id = maxId + 1;
      this.user = {
        id: this.id,
        name: '',
        email: '',
        phone: '',
        status: 'user'
      }

    this.getInfoService.addNewUser(this.user);
    }
  }
}
