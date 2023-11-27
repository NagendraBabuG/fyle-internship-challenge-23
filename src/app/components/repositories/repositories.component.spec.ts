import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { RepositoriesComponent } from './repositories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
describe('RepositoriesComponent', () => {
  let component:RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoriesComponent],
      imports: [HttpClientModule, HttpClientTestingModule, NgxPaginationModule],  // Import the HttpClientTestingModule
      providers: [ApiService],
    });

    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
