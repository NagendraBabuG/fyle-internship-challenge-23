import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserProfileComponent } from './user-profile.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],

      imports: [HttpClientTestingModule,FormsModule,
         HttpClientModule], 
      providers:  [{ provide: ApiService}]
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('testing')
    expect(component).toBeTruthy();
  });

  it('should render input section when showInputSection is true', () => {
    component.showInputSection = true;
    fixture.detectChanges();

    const inputSection = fixture.debugElement.query(By.css('.inputSection'));
    expect(inputSection).toBeTruthy();
  });
  it('should show Not Found when username is Not Valid', ()=>{

    component.showInputSection = true;
    component.userNotFound = true;
    component.isLoading = false;
    component.username = ''
    fixture.detectChanges()

    const notFoundSection = fixture.debugElement.query(By.css('.notFound'))
    expect(notFoundSection).toBeTruthy()

  })

  it('should show Loading when search still loading', ()=>{

    component.showInputSection = false;
    component.userNotFound = false;
    component.isLoading = true;
    fixture.detectChanges()

    const notFoundSection = fixture.debugElement.query(By.css('.loading'))
    expect(notFoundSection).toBeTruthy()

  })

  


});
