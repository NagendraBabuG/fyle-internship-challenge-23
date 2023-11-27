import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


const expectedData = {
  "login": "johnpapa",
  "id": 1202528,
  "node_id": "MDQ6VXNlcjEyMDI1Mjg=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1202528?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/johnpapa",
  "html_url": "https://github.com/johnpapa",
  "followers_url": "https://api.github.com/users/johnpapa/followers",
  "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
  "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
  "organizations_url": "https://api.github.com/users/johnpapa/orgs",
  "repos_url": "https://api.github.com/users/johnpapa/repos",
  "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/johnpapa/received_events",
  "type": "User",
  "site_admin": false,
  "name": "John Papa",
  "company": "JohnPapa.net, LLC",
  "blog": "http://johnpapa.net",
  "location": "Orlando, FL",
  "email": null,
  "hireable": null,
  "bio": "Winter is Coming",
  "twitter_username": "john_papa",
  "public_repos": 143,
  "public_gists": 58,
  "followers": 15206,
  "following": 1,
  "created_at": "2011-11-17T17:05:03Z",
  "updated_at": "2023-11-01T15:31:38Z"
}

const notFound = {
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
}


describe('ApiService', () => {
  let service: ApiService;
  let githubService: ApiService;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [{ provide: ApiService }]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    githubService = new ApiService(httpClientSpy)
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });




  it('should return user data', () => {
    httpClientSpy.get.and.returnValue(of(expectedData))
    githubService.getUser('johnpapa').subscribe({
      next: (data) => {
        expect(data).toBe(expectedData)
      },
      error: (error) => {
        expect(error).toBeDefined()
      }
    })
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
  })





  it('should return User Not found If not valid UserName', () => {
    httpClientSpy.get.and.returnValue(of(expectedData))
    githubService.getUser('kmbdas').subscribe({
      next: (data) => {
        expect(data).toBeDefined()
      },
      error: (error) => {
        expect(error).toEqual(notFound)
      }
    })
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
  })



  it('should return userRepos', () => {
    const username = 'johnpapa';
    const page = 1;
    const perPage = 10;
    githubService.getUserRepositories(username, page, perPage).subscribe({
      next: (data) => {
        expect(data).toBeDefined()

        if (data.length > 0) expect(data.length).toEqual(10)
        console.log(data[0])
        if (data.length > 0) expect(data[0].name).toEqual('.github')
      },
      error: (error) => {
        expect(error).toBeDefined()
      }
    }
    )
  })

});
