
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'nfx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, 
              private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifier.subscribe(message => {
      this.openSnackBar(message,'Ok');
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
