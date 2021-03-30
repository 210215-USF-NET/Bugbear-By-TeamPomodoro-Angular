import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCharactersComponent } from './get-characters.component';

describe('GetCharactersComponent', () => {
  let component: GetCharactersComponent;
  let fixture: ComponentFixture<GetCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
