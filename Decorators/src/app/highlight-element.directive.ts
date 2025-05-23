import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
  standalone: true,
})
export class HighlightElementDirective implements OnInit{
  @HostBinding('style.backgroundColor') bgColor = 'black';
  @HostBinding('style.color') textColor = 'white';

  colorArray = ['#01231f','#2a2f33','#1e1f26'];

  private setRandomColor(){
    const colorPick = Math.floor(Math.random()*this.colorArray.length);
    
    if(this.bgColor !==this.colorArray[colorPick]){
      this.bgColor = this.colorArray[colorPick];
    }
  }

  @HostListener('click') onToggle(){
    if(this.bgColor === 'red'){
      this.bgColor = 'black';
      this.textColor = 'white';
    }
    else{
      this.bgColor = 'red';
      this.textColor = 'black';
    }
  }
  ngOnInit(): void {
    this.bgColor = 'red';
    this.textColor = 'black';
  }

}
