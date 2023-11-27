import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComponent } from './repo.component';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoComponent, TruncatePipe],
      imports: [NgxPaginationModule], 
      providers:  []
    });
    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
