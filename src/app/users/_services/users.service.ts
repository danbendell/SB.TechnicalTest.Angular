import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'src/app/users/_models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #usersUrl = 'assets/users.json';
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.listUsers().subscribe((users) => {
      this.users$.next(users);
    });
  }

  private listUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.#usersUrl)
      .pipe(map((users) => users.map((user) => new User(user))));
  }

  public resetBalances(): void {
    let zeroedBalances = this.users$.value;
    zeroedBalances.forEach((user) => user.resetBalance());
    this.users$.next(zeroedBalances);
  }
}
