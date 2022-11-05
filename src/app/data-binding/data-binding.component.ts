import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'hTTp://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string='';
  valorSalvo: string='';

  isMouseOver:boolean = false;

  nome: string='abc';

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  pessoa:any = {
    nome: 'def',
    idade: 24
  }

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  salvarValor(valor:string) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
