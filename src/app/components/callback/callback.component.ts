import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
// export class CallbackComponent implements OnInit {
export class CallbackComponent {

  constructor( public auth: AuthService) { }

 // ngOnInit() {
 //   this.auth.handleAuthCallback();
 // }

}
