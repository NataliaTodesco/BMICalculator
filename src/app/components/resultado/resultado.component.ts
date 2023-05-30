import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultado: number;
  gravedad:string = "";
  texto:string = "";

  constructor(private route:ActivatedRoute) { 
    this.resultado = +this.route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if (this.resultado >= 25){
      this.gravedad = "Exceso de peso"
      this.texto = "Tienes un peso corporal superior a lo normal. Intente hacer más  ejercicio."
    } else if (this.resultado >= 18.5){
      this.gravedad = "Normal";
      this.texto = "Tienes un peso corporal normal. ¡Buen Trabajo!";
    } else {
      this.gravedad = "Bajo Peso";
      this.texto = "Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco más."
    }
  }

}
