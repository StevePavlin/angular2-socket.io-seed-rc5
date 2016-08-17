import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {


  private io = io('http://127.0.0.1:4201');
  constructor() {
    console.log("SocketService construct")
  }

  get() {
    return this.io;
  }
}
