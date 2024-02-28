import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Book } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
constructor(private userService : UserService,private router : Router){

}
books : Book[]= [];
  ngOnInit(): void {
    this.userService.getBooks().subscribe(books =>{
      this.books = books;
    });
  }
 
delete(book : Book){
  this.userService.deleteBook(book);
  this.books = this.books.filter(b => b.id!=book.id);
}
addBook(){
  this.router.navigate(['/add']);
}

}
