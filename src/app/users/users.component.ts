import { Component } from '@angular/core';



class Users{
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
    constructor(name: string, firstName: string, age: number, quote: string, photo: string){
      this.name = name;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo
  }
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  users:Users[];
constructor () {
  this.users=[
  new Users(
    'je suis un chat',
    "gratouille",
    3,
    'miaou miaou miaou miaou miaou miaou miaou miaou',
    'assets/img/chats.jpg'
  ),

   new Users(
    'je suis un chat',
    "nebula",
    12,
    'ronron ronron ronron ronron ronron',
    'assets/img/chats1.jpg'
  )  
  ];
}

  showText: boolean = true;

  toggleText() {
    this.showText = !this.showText;
  }
}
  