import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {
  @Input() @Output() escolhido;

  constructor() { }

  ngOnInit() {
  }

}
