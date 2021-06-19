import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const headerSideBar = document.querySelector('.header-sidebar');
    const mainContent = document.querySelector('.main-content');
    const overlay = document.querySelector('.overlay');

    const hamburgerMenuButton = document.querySelector('.hamburger');
    hamburgerMenuButton.addEventListener('click', () => {
      hamburgerMenuButton.classList.toggle('is-active');
      headerSideBar.classList.toggle('header-sidebar-visible');
      mainContent.classList.toggle('main-content-blurred');
      overlay.classList.toggle('overlay-visible');
    });

    const headerSideBarItems = document.querySelectorAll('.header-sidebar-item');
    headerSideBarItems.forEach((headerSideBarItem) => {
      headerSideBarItem.addEventListener('click', () => {
        hamburgerMenuButton.classList.remove('is-active');
        headerSideBar.classList.remove('header-sidebar-visible');
        mainContent.classList.remove('main-content-blurred');
        overlay.classList.remove('overlay-visible');
      });
    });

    overlay.addEventListener('click', () => {
      hamburgerMenuButton.classList.remove('is-active');
      headerSideBar.classList.remove('header-sidebar-visible');
      mainContent.classList.remove('main-content-blurred');
      overlay.classList.remove('overlay-visible');
    });
  }
}
