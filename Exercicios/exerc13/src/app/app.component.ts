import { Component } from '@angular/core';
import { Order } from './order';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Café Conversa';

  membros=['Fernando','Paulo','Tais'];
  bebidas = ['café', 'chá', 'leite'];


  orderModel = new Order('someone', 'someone@uva.edu', 9991234567, 'café', 'coul', true);

  AtualizaModel(dados){

    console.log(dados.value.drink);

    this.orderModel = new Order(dados.value.name,
      dados.value.email,
      dados.value.phone, '', '', true);

  }

}
