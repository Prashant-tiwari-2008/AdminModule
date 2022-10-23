import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillModelComponent } from './add-skill-model.component';

describe('AddSkillModelComponent', () => {
  let component: AddSkillModelComponent;
  let fixture: ComponentFixture<AddSkillModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkillModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkillModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
