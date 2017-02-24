/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';

describe('CarouselSample', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CarouselModule.forRoot()],
      declarations: [AppComponent]
    });
    // .compileComponents(); // <- not needed with webpack!
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).not.toBeTruthy();
  });

  it('should have the correct number of slides',  () => {
    fixture.detectChanges();
    const noOfSlides = component.slides.length;
    console.log(`Carousel has ${noOfSlides} slides`);
    expect(component.slides.length).toEqual(20);
  });

  describe('when a slide is removed', () => {
    it('should have the correct number of slides',  () => {
      fixture.detectChanges();
      expect(component.slides.length).toEqual(4);
    });
  });
});

// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// import { CarouselModule } from 'ng2-bootstrap';

// describe('AppComponent', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports:[CarouselModule.forRoot()],
  //     declarations: [
  //       AppComponent
  //     ],
  //   });
  //   TestBed.compileComponents();
  // });

//   it('should create the app', (() => {
//     // fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));

//   it(`should have as title 'app works!'`, (() => {
//     // fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app works!');
//   }));

//   xit('should render title in a h1 tag', async(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('app works!');
//   }));
// });

