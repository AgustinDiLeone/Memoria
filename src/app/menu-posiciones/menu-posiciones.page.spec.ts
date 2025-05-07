import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPosicionesPage } from './menu-posiciones.page';

describe('MenuPosicionesPage', () => {
  let component: MenuPosicionesPage;
  let fixture: ComponentFixture<MenuPosicionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPosicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
