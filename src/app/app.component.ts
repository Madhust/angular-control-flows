import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = true;
  
  showAnotherIf = false;

  skills = ['javascript', 'html', 'css'];

  caseNo = 3;
}
