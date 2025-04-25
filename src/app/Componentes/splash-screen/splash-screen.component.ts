import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SplashScreenComponent {
  topText = 'Agustín Di Leone'.split('');
  bottomText = 'PPS-4to'.split('');
}
