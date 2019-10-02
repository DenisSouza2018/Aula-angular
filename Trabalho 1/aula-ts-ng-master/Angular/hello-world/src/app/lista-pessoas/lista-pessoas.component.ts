import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  @Input() lista;
  @Output() escolher = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleciona(p) {
    this.escolher.emit(p);
  }

}
