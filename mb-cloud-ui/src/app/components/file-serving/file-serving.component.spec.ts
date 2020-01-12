import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileServingComponent } from './file-serving.component';

describe('FileServingComponent', () => {
  let component: FileServingComponent;
  let fixture: ComponentFixture<FileServingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileServingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileServingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
