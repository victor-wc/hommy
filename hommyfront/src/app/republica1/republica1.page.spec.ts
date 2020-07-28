import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Republica1Page } from './republica1.page';

describe('Republica1Page', () => {
  let component: Republica1Page;
  let fixture: ComponentFixture<Republica1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Republica1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Republica1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
