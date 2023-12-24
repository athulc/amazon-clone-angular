import { Component } from '@angular/core';
import { ImageSliderModule } from '../../modules/image-slider/image-slider.module';
import { SlideInterface } from '../../modules/image-slider/types/slide.interface';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ImageSliderModule, ProductComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  slides: SlideInterface[] = [
    // {url: '/assets/image-1.jpeg', title: 'Image 1'},
    // {url: '/assets/image-2.jpeg', title: 'Image 2'},
    // {url: '/assets/image-3.jpeg', title: 'Image 3'},
    {url: '/assets/image-4.png', title: 'Image 4'},
    {url: '/assets/image-5.jpg', title: 'Image 5'}
  ]
}
