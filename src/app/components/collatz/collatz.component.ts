import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numeros!: Array<number>;
  public numero!: number;
  constructor(private _activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params["numero"]){
        this.numero = parseInt(params["numero"]);
        this.generarCollatz();
      }
    });
  }
  generarCollatz() :void {
    this.numeros = new Array<number>();
    var num;
    this.numeros.push(this.numero);
    num = this.numero;
    while (num != 1){
      if (num % 2 == 0){
        num = num / 2;
      }else{
        num = num * 3 + 1;
      }
      this.numeros.push(num);
    }
  }
}
