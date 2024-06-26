import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLoaderComponent } from './img-loader.component';

describe('ImgLoaderComponent', () => {
  let component: ImgLoaderComponent;
  let fixture: ComponentFixture<ImgLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgLoaderComponent]
    });
    fixture = TestBed.createComponent(ImgLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
