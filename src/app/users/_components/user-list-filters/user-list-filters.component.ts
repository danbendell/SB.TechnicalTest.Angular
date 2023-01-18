import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { UserListFilters } from 'src/app/users/_models/user-list-filters.model';

@Component({
  selector: 'app-user-list-filters',
  templateUrl: './user-list-filters.component.html',
  styleUrls: ['./user-list-filters.component.scss'],
})
export class UserListFiltersComponent implements OnInit, OnDestroy {
  @Output() onFilter: EventEmitter<UserListFilters> = new EventEmitter();
  public form!: FormGroup;

  private readonly onDestroy$: Subject<null> = new Subject();

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
    });

    this.form.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(300),
        distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y))
      )
      .subscribe((filters) => this.onFilter.emit(filters));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}
