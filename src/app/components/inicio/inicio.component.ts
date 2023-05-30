import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = "M";
  total = 0;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selecSexo(sexo:string){
    this.sexo = sexo;
  }

  calcular(){
    this.total = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(["resultado",this.total.toFixed(1)]);
  }
}
