import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MejoresResultadosPage } from './mejores-resultados.page';

describe('MejoresResultadosPage', () => {
  let component: MejoresResultadosPage;
  let fixture: ComponentFixture<MejoresResultadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoresResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
