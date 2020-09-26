import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../../services/notification.service';

@Component({
  selector: 'nfx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notify("Bem vindo!");
  }

}
