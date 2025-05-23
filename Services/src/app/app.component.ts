import { Component, InjectionToken } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MyComponentComponent } from "./my-component/my-component.component";
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './log-message2.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink, ProductsComponent, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {provide: LogMessage1Service, useClass: LogMessage1Service}
    {provide: LogMessage2Service, useClass: LogMessage2Service}
  ],
})
export class AppComponent implments OnInit{
  public logger = inject(LogMessage1Service);

  ngOnInit(): void{
    this.logger.log();
  }
}

