import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from './services/api.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, UserProfileComponent],
    imports: [HttpClientTestingModule, HttpClientModule, NgxPaginationModule], 
      providers:  [{ provide: ApiService}]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  
});
