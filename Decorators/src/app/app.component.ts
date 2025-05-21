import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses: { id:number; name: string }[]=[
    {id:1, name: 'Javascript'},
    {id:2, name: 'Angular'},
    {id:3, name: 'React'},
    {id:4, name: 'Vue'},
  ]
}
