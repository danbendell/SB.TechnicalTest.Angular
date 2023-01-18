import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from 'src/app/users/user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListFiltersComponent } from './_components/user-list-filters/user-list-filters.component';

@NgModule({
  declarations: [UserListComponent, UserListFiltersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class UsersModule {}
