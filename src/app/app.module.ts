import { HttpClientModule } from  '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepoComponent } from './components/repo/repo.component';
import { ApiService } from './services/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncatePipe } from './pipes/truncate.pipe'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UserProfileComponent,
    RepoComponent,
    TruncatePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
