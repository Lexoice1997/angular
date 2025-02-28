import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'comment-icon',
  template: `<svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 4.16876V11.75C0 12.4406 0.559375 13 1.25 13H8.83125C9.52188 13 10.0813 12.4406 10.0813 11.75V4.16876C10.0813 3.47814 9.52188 2.91876 8.83125 2.91876H1.25C0.559375 2.91876 0 3.47814 0 4.16876Z"
      fill="black"
    />
    <path
      d="M2.91895 1.25V2.1375C2.91895 2.20625 2.9752 2.2625 3.04395 2.2625H9.2377C10.0627 2.2625 10.7377 2.9375 10.7377 3.7625V9.95625C10.7377 10.025 10.7939 10.0813 10.8627 10.0813H11.7502C12.4408 10.0813 13.0002 9.52188 13.0002 8.83125V1.25C13.0002 0.559375 12.4408 0 11.7502 0H4.16895C3.47832 0 2.91895 0.559375 2.91895 1.25Z"
      fill="black"
    />
  </svg>`,
})
export class CommentIconComponent {
  fillColor = 'rgb(255, 0, 0)';
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
