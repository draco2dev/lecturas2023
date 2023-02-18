import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDatailComponent } from './menu-datail.component';

describe('MenuDatailComponent', () => {
  let component: MenuDatailComponent;
  let fixture: ComponentFixture<MenuDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
