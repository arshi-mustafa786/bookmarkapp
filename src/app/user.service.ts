import { Injectable } from '@angular/core';
import { Book, User } from './models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : User = {};
  base_url : string = '';
  addBook(book: Book) {
    try{
      this.httpClient.put<Book>(`${this.base_url}/user/${this.user.id}/book`,book);
    }catch(error){
      console.log(error);
      throw new Error("Can add book");
    }
    
  }
  deleteBook(book: Book) {
    this.httpClient.delete(`${this.base_url}/user/${this.user.id}/${book.id}`);
  }
  getBooks() : Observable<Book[]>{
      return this.httpClient.get<Book[]>(`${this.base_url}/user/${this.user.id}/books`);
  }
  registerUser(email: string) : Observable<User> {
    try{
      this.user.email = email;
      return this.httpClient.post<User>(`${this.base_url}/user/register`,this.user);
    }catch(error){
      console.log(error);
      throw new Error("Unable to register user!");
    }
    
  }
  

  public userLoggedIn : boolean = false;

  isLoggedIn(){
    return this.userLoggedIn;
  }
  loginUser(email: string){
    try {

      this.user.email = email;
      this.httpClient.post<User>(`${this.base_url}/user/login`,this.user).subscribe(user=>{
        this.user = user;
      });
      this.userLoggedIn = true;
    } catch (error) {
      throw new Error("User could not be logged in this time");
    }
    
  }

  constructor(private httpClient :HttpClient) { }
}
