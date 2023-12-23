import { Component, Input } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;
  interval!: any;

  // ngOnInit(): void {
  //   this.interval = setInterval(() => {
  //     this.goToNext()
  //   }, 2000)
  // }

  getCurrentSlideUrl(): string {    
    return `url('${this.slides[this.currentIndex].url}')`
  }

  goToPrevious(): void {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  goToNext(): void {
    this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 :   this.currentIndex + 1;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
