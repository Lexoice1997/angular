import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'viewed-icon',
  template: `<svg
    width="20"
    height="13"
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C5.45536 0 1.58929 2.68609 0 6.5C1.58929 10.3139 5.45536 13 10 13C14.5446 13 18.4107 10.3139 20 6.5C18.4107 2.68609 14.5446 0 10 0ZM10 10.8348C7.5 10.8348 5.45536 8.88477 5.45536 6.5C5.45536 4.11523 7.5 2.16523 10 2.16523C12.5 2.16523 14.5446 4.11523 14.5446 6.5C14.5446 8.88477 12.5 10.8348 10 10.8348ZM10 3.9C8.5 3.9 7.27232 5.07086 7.27232 6.5C7.27232 7.92914 8.5 9.1 10 9.1C11.5 9.1 12.7277 7.92914 12.7277 6.5C12.7277 5.07086 11.5 3.9 10 3.9Z"
      fill="black"
    />
  </svg>`,
})
export class ViewedIconComponent {
  fillColor = 'rgb(255, 0, 0)';
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
