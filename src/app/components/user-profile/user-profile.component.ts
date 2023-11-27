import { BootstrapOptions, Component } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RepositoriesComponent } from '../repositories/repositories.component';
import { FormsModule } from '@angular/forms';
import { User, createDefaultUser} from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  username: string = '';
  searchForm : FormGroup;
  userDetails: User = createDefaultUser();
  userRepos: any[] = [];
  isLoading: boolean = false;
  showInputSection: boolean = true;
  userNotFound : boolean = false;
  perPage = 10;

  constructor(private formBuilder: FormBuilder, private githubService: ApiService) {
    this.searchForm = this.formBuilder.group({
      username: ['', Validators.required],

    });
   
  }
  onPerPageChange()
  {
   // this.config.
   console.log(this.perPage, ' page')
  }
  searchUser() {
    
    if (this.username.length > 0) {
      this.isLoading = true;
      this.showInputSection = false;
      

      this.githubService.getUser(this.username).subscribe(
        (userData:User) => {
          this.userDetails = userData;
          this.githubService.getUserRepositories(this.username, 1, 10).subscribe(
            (reposData) => {
              this.userRepos = reposData;
              this.isLoading = false;
              this.showInputSection = false;
            },
            (reposError) => {
              console.error(reposError);
              this.isLoading = false;
            }
          );
        },
        (userError) => {
          console.error(userError);
          this.username = ''
          this.userNotFound = true;
          this.showInputSection = true;
          this.isLoading = false;
          
        }
      );
    }
  }

  resetSearch() {
    this.username = '';
    this.userDetails = createDefaultUser();
    this.userRepos = [];
    this.isLoading = false;
    this.showInputSection = true;
  }

}
