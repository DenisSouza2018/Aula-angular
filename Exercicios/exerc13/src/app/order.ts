export class Order {
   constructor(
      public name: string,
      public email: string,
      public phone: number,
      public drink: string,
      public quantidadebebida: number,
      public comer: string,
      public quantidadecomer: number,
      
      public sendText: boolean

   ){}
} 