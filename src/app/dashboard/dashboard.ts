import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  slideStore = [
    { id: 1, img: '/assets/teensin.jpg', title: 'Slide 1' },
    { id: 2, img: '/assets/worli2.jpg', title: 'Slide 2' },
    { id: 3, img: '/assets/teensin.jpg', title: 'Slide 3' },
    { id: 4, img: '/assets/worli2.jpg', title: 'Slide 4' },
    { id: 5, img: '/assets/teensin.jpg', title: 'Slide 5' },
    { id: 6, img: '/assets/worli2.jpg', title: 'Slide 6' },
    { id: 7, img: '/assets/teensin.jpg', title: 'Slide 7' },
    { id: 7, img: '/assets/worli2.jpg', title: 'Slide 8' },
    { id: 8, img: '/assets/teensin.jpg', title: 'Slide 9' },
    { id: 9, img: '/assets/worli2.jpg', title: 'Slide 10' },
  ];
  slideConfig = {
    infinite: true,
    speed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true
  };

  userSlideStore = [
    { id: 1, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 2, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 3, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 4, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 1, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 2, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 3, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 4, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 1, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 2, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 3, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 4, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 1, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 2, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 3, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 4, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 1, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 2, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 3, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 4, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 5, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
    { id: 6, img: '/assets/img/user-icon.png', player: 'ha***', time: '12:34', winAmount: 75262580 },
  ];

  slickInit(e: any): void {
    console.log('');
  }
}
