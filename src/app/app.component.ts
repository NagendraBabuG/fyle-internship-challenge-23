import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FormsModule } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private githubService: ApiService) {
  }
  title : string = 'fyle-frontend-challenge'

  ngOnInit() {
   // this.apiService.getUser('johnpapa').subscribe(console.log);
   // this.apiService.getUserRepositories('johnpapa', 1, 10).subscribe(console.log)
  }
}
