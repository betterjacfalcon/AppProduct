import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComunComponent } from './no-comun.component';

describe('NoComunComponent', () => {
  let component: NoComunComponent;
  let fixture: ComponentFixture<NoComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoComunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
