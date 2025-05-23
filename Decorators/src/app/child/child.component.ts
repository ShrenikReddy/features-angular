import { AfterContentChecked, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterContentInit {
 @ContentChild('showPara') paraRef?: ElementRef;

 ngAfterContentInit(): void { 
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'Italic';
    console.log(this.paraRef);
 }
 }

