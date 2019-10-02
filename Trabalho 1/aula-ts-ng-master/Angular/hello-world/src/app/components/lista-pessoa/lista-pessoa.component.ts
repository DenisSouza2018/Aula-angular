import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  @Input() lista;
  @Output() escolher = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleciona(p) {
    this.escolher.emit(p);
  }

}
