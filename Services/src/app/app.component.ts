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
 count = signal<number>(0);

 incrCounter(){
  this.count.set(this.count() + 1);
  console.log('Signal Value:', this.count());
 }
}
