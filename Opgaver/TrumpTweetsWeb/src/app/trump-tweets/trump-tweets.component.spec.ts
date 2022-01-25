import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpTweetsComponent } from './trump-tweets.component';

describe('TrumpTweetsComponent', () => {
  let component: TrumpTweetsComponent;
  let fixture: ComponentFixture<TrumpTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumpTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
