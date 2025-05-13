import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../models/user.model';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, TableModule, HttpClientModule, PaginatorModule],
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  paginatedUsers: User[] = [];

  // Pagination
  totalRecords: number = 0;
  rows: number = 5; 
  first: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe((res) => {
    const rawUsers = res.results || []; 

    this.users = rawUsers.map(
      (u: any) =>
        new User(
          u.id,
          u.name?.split(' ')[0] || 'First', 
          u.name?.split(' ')[1] || 'Last',  
          u.email || `${u.name?.replace(/\s/g, '').toLowerCase()}@test.com`
        )
    );

    this.totalRecords = this.users.length;
    this.updatePaginatedUsers();
  });
}


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers() {
    this.paginatedUsers = this.users.slice(this.first, this.first + this.rows);
  }
}
