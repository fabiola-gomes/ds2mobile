import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstagioPage } from './estagio.page';

describe('EstagioPage', () => {
  let component: EstagioPage;
  let fixture: ComponentFixture<EstagioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstagioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
