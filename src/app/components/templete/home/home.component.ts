import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../../services/notification.service';

@Component({
  selector: 'nfx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }

  openSnackBar(message){
    this.notificationService.notify(message);
  }

}
