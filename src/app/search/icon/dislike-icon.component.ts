import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dislike-icon',
  template: `<svg
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.144196 0.769779L1.04542 1.5683C0.392934 2.21671 0 3.07912 0 4.04693C0 6.58624 2.54867 8.62408 6.40952 11.7671L7.5018 12.6327L8.59048 11.7639C9.33309 11.1602 10.0288 10.5948 10.6633 10.0614L13.987 13L14.8522 12.2334L1.01658 0L0.144196 0.769779ZM15 4.04373C15 1.97076 13.2012 0.367322 10.876 0.367322C9.56381 0.367322 8.32733 0.900737 7.5018 1.76953C6.67628 0.900737 5.4398 0.367322 4.12761 0.367322C3.8248 0.367322 3.5328 0.396069 3.25162 0.447174L12.3973 8.53145C14.0375 6.97592 15 5.60565 15 4.04373Z"
      fill="black"
    />
  </svg>`,
})
export class DislikeIconComponent {
  fillColor = 'rgb(255, 0, 0)';
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
