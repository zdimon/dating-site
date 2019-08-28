import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private socket_service: SocketService) { }

  ngOnInit() {
    this.socket_service.connect_me();
    this.socket_service.currentDocument.subscribe(data => {
      console.log(data);
      console.log('fireeeeee')
    })
  }

  onClick() {
    this.socket_service.connect_me();
  }
}
