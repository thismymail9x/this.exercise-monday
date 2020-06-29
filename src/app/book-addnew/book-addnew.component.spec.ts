import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddnewComponent } from './book-addnew.component';

describe('BookAddnewComponent', () => {
  let component: BookAddnewComponent;
  let fixture: ComponentFixture<BookAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
