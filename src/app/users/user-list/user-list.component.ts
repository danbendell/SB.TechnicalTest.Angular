import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { UserListFilters } from 'src/app/users/_models/user-list-filters.model';
import { User } from 'src/app/users/_models/user.model';
import { UsersService } from 'src/app/users/_services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  public filteredUsers$!: Observable<User[]>;
  public dataSource!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = [
    'name',
    'age',
    'registered',
    'email',
    'balance',
  ];
  #filters$: BehaviorSubject<UserListFilters> = new BehaviorSubject(
    new UserListFilters()
  );

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.filteredUsers$ = this.getFilteredUsers$();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public onFilter(filters: UserListFilters): void {
    this.#filters$.next(filters);
  }

  public resetBalances(): void {
    //Assuming the user data is coming from an API
    //Reseting balances should also be an API request
    this.userService.resetBalances();
  }

  private getFilteredUsers$(): Observable<User[]> {
    return combineLatest([this.userService.users$, this.#filters$]).pipe(
      map(([users, filters]: [User[], UserListFilters]) =>
        this.filterName(users, filters)
      ),
      tap((users) => (this.dataSource.data = users))
    );
  }

  private filterName(users: User[], filters: UserListFilters): User[] {
    if (!filters || !filters.name) return users;
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())
    );
  }
}
