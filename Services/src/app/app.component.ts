import { Component, signal } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';

@Component({
  selector: 'app-root',
  imports: [MessagesComponent, MessagesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messages = signal<string[]>([]);

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }

  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }
}
