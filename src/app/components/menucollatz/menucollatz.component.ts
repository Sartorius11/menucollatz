import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public aleatorios!: Array<number>;
  constructor() { 
  }
  ngOnInit(): void {
    this.aleatorios = new Array<number>();
    for (var i = 1; i <= 7; i++){
      var random = Math.floor(Math.random() * 100 + 1);
      this.aleatorios.push(random);
    }
  }
}
