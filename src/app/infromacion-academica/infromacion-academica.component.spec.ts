import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromacionAcademicaComponent } from './infromacion-academica.component';

describe('InfromacionAcademicaComponent', () => {
  let component: InfromacionAcademicaComponent;
  let fixture: ComponentFixture<InfromacionAcademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfromacionAcademicaComponent]
    });
    fixture = TestBed.createComponent(InfromacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
