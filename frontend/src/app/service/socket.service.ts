import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentDocument = this.socket.fromEvent<string>('get_sid');
  constructor(private socket: Socket) { }

  connect_me() {
    console.log('emmiting event to server');
    this.socket.emit('ConnectMe',{'data': '123'});
  }

  


}
