import { Component } from '@angular/core';
import { ImageSliderModule } from '../../modules/image-slider/image-slider.module';
import { SlideInterface } from '../../modules/image-slider/types/slide.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ImageSliderModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  slides: SlideInterface[] = [
    {url: '/assets/image-1.jpeg', title: 'Image 1'},
    {url: '/assets/image-2.jpeg', title: 'Image 2'},
    {url: '/assets/image-3.jpeg', title: 'Image 3'}
  ]
}
