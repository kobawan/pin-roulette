import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pin {
  id: number;
  thumbnail: string;
  link: string;
  name: string;
  width: number;
  height: number;
}

const generateDummyPins = (length: number): Pin[] => {
  return new Array(length).fill(0).map((_, i) => ({
    id: i,
    thumbnail: 'https://picsum.photos/200',
    link: 'https://www.pinterest.com',
    name: `pin-${i}`,
    width: 200,
    height: 200,
  }));
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private pins = generateDummyPins(20);
  public isLoading = false;
  public error: string | undefined;
  public result: Pin | undefined;

  constructor() {}

  public chooseProject() {
    this.isLoading = true;
    window.setTimeout(() => {
      const rand = Math.floor(Math.random() * (this.pins.length + 1));
      this.result = this.pins[rand];
      // this.error = 'Oops something went wrong, please try again later!';
      this.isLoading = false;
    }, 500);
  }
}
