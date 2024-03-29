import { Component, OnInit } from '@angular/core';
import {ChatService} from './chat.service';
import {DataComponent} from "../../interfaces/data-interface";
import {CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  directives: [CollapseDirective],
  providers: [ChatService]
})

export class ChatComponent implements OnInit, DataComponent {

  chatMessages = [];
  messageError = "";

  constructor(public chatService: ChatService) {
  }

  get errorCollapse() {
    return this.messageError == "";
  }

  getInitialData() {
    var self = this;


    function handleChatData(data) {

      if (data.success) {
        self.chatMessages = data.result;
      } else {
        return;
      }
    }

    this.chatService.updateChat()
      .subscribe(data => handleChatData(data))
  }

  ngOnInit() {
    this.getInitialData();
  }

  submitMessage(text) {
    var self = this;
    function handleData(data) {
      if (data.success) {
        text.value = "";
        self.messageError = "";
      } else {
        self.messageError = data.err;
      }
    }

    if (text.value.length > 0) {
      this.chatService.send(text.value)
        .subscribe(data => handleData(data));
    }
  }

}
