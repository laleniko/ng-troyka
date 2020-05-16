import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public currentWindowWidth: number;
  public mobileMenuVisibility = false;

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;

    if (this.currentWindowWidth > 850) {
      this.mobileMenuVisibility = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }

}
