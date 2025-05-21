import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent) ChildComponent?: ChildComponent;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;

  incrChildCounter(){
    console.log(this.ChildComponent);
    this.ChildComponent?.incrCounter();
  }

  ngAfterViewInit(): void{
    if(this.btnRef?.nativeElement){
      this.btnRef.nativeElement.innerHTML = 'Counter++';
    }
  }
}
