import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerdashboardComponent } from './passengerdashboard.component';

describe('PassengerdashboardComponent', () => {
  let component: PassengerdashboardComponent;
  let fixture: ComponentFixture<PassengerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
