import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Repository } from '../models/repository';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://api.github.com';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get<User>(`https://api.github.com/users/${githubUsername}`);
  }
  getUserRepositories(username: string, page: number, perPage: number): Observable<Repository[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;

    // Set up query parameters
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    // Make the API request
    return this.httpClient.get<Repository[]>(url, { params }) || of([]);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
