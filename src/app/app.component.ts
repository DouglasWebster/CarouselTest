import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public myInterval = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides = false;

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
  }

  public addSlide(): void {
    this.slides.push({
      image: `assets/images/${this.slides.length % 4 + 1}.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
