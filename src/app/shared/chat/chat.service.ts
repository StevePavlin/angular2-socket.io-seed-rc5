import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {APIService} from "../api.service";

@Injectable()
export class ChatService extends APIService {

  constructor(http:Http) {
    super(http);
  }

  chatMessages = [];

  updateChat() {
    return this.http.get(this.url("/chat"), {withCredentials: true})
      .map(this.extractData)
  }
  
  send(message) {
    var request = this.prepareRequest({
      message: message
    });

    return this.http.post(this.url('/chat/send'), request.body, request.options)
      .map(this.extractData);
  }
}
