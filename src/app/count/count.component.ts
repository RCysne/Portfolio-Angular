import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})


export class CountComponent {
  public countInitial: number = 0;

  increment() {
    this.countInitial++;
  }

  decrement() {
    if (this.countInitial === 0) {
      return;
    } else { 
      this.countInitial--;
  }
}
}
