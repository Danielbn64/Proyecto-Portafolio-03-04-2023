import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconFamilyComponent } from './card-icon-family.component';

describe('CardIconFamilyComponent', () => {
  let component: CardIconFamilyComponent;
  let fixture: ComponentFixture<CardIconFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIconFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
