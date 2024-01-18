import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodCourtPage } from './food-court.page';

describe('FoodCourtPage', () => {
  let component: FoodCourtPage;
  let fixture: ComponentFixture<FoodCourtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodCourtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
