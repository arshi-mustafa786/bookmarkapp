import { Component } from '@angular/core';
import { Book } from '../models/user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss'
})
export class AddbookComponent {
   book : Book = {};
constructor(private userService : UserService){

}

  addBook(){
      this.userService.addBook(this.book);
  }

}
