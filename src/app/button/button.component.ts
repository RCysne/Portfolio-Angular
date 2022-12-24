import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
