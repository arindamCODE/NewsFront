import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspackComponent } from './newspack.component';

describe('NewspackComponent', () => {
  let component: NewspackComponent;
  let fixture: ComponentFixture<NewspackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
