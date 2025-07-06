import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishComponentComponent } from './publish-component.component';

describe('PublishComponentComponent', () => {
  let component: PublishComponentComponent;
  let fixture: ComponentFixture<PublishComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
