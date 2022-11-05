import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: string = "12";

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
