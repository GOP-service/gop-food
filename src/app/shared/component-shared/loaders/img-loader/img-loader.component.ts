import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

const pluggins = [
  CommonModule
];
@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
  standalone: true,
  imports: pluggins
})
export class ImgLoaderComponent {
  @Input() isLoading: boolean = true;
}
