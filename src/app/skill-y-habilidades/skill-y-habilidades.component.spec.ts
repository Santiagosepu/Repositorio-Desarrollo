import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillYHabilidadesComponent } from './skill-y-habilidades.component';

describe('SkillYHabilidadesComponent', () => {
  let component: SkillYHabilidadesComponent;
  let fixture: ComponentFixture<SkillYHabilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillYHabilidadesComponent]
    });
    fixture = TestBed.createComponent(SkillYHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
