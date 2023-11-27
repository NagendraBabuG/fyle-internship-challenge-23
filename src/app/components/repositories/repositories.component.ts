import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RepoComponent } from '../repo/repo.component';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {
  @Input() userName: string = '';
  @Input() perPage : number = 10;

  userRepos: any[] = [];
  isLoading: boolean = true;
  page : number = 1;
  //perPage : number = 10;
  config = {
   currentPage: this.page,
    itemsPerPage: this.perPage,
    totalItems : 20
  }
  constructor(private apiService: ApiService) {
    this.page = 1;
    this.perPage = 10;
    this.searchRepos();
    console.log(this.userName)
  }
  ngOnChanges(changes: SimpleChanges): void {
    const userNameChange = changes['userName'];
    const perPageChange = changes['perPage'];
    if ((userNameChange && userNameChange.currentValue) || (perPageChange && perPageChange.currentValue)) {
      this.page = 1;
      //console.log('userName changed:', this.userName);
      this.perPage = perPageChange.currentValue;
      this.config.itemsPerPage = perPageChange.currentValue;
      this.searchRepos();
    }
  }

  searchRepos() {
    if (this.userName.length > 0) {
      this.apiService.getUser(this.userName).subscribe(
        (userData : any)=>{
          this.config.totalItems = userData.public_repos;
          console.log('total items ', this.config.totalItems)
        }
      )
      this.apiService.getUserRepositories(this.userName, this.page, this.perPage)
        .subscribe(
          (reposData) => {
            this.userRepos = reposData;
            this.isLoading = false;
            //console.log('repos data', this.userRepos);
          },
          (reposError) => {
            console.error(reposError);
            this.isLoading = false;
          }
        );
    }
  }

  renderPage(event: number) {
    this.page = event;
    this.config.currentPage = event;
    this.searchRepos();
  }
}
