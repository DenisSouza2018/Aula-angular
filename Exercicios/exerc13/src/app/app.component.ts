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


  orderModel = new Order('', '', 0, '', '', true);

  

  
  

}
