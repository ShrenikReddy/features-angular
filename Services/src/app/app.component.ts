import { CommonModule } from '@angular/common';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { concatMap, mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { interval, timer } from 'rxjs';
import { EMPTY } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  loadData: boolean = false;
  responseData: any;

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.responseData = data;
        this.loadData = true;
      });
  }
}
