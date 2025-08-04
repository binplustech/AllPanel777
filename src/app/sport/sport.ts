import { Component } from '@angular/core';

@Component({
  selector: 'app-sport',
  standalone: false,
  templateUrl: './sport.html',
  styleUrl: './sport.css'
})
export class Sport {
  public sidebarItems: Array<{ title: string; route: string; }> = [
    { title: 'All Casino', route: '' },
    { title: 'Roulette', route: '' },
    { title: 'Teenpatti', route: '' },
    { title: 'Poker', route: '' },
    { title: 'Baccarat', route: '' },
    { title: 'Dragon Tiger', route: '' },
    { title: '32 Cards', route: '' },
    { title: 'Andar Bahar', route: '' },
    { title: 'Lucky 7', route: '' },
    { title: '3 Card Judgement', route: '' },
    { title: 'Casino War', route: '' },
    { title: 'Worli', route: '' },
    { title: 'Sports', route: '' },
    { title: 'Bollywood', route: '' },
    { title: 'Lottery', route: '' },
    { title: 'Queen', route: '' },
    { title: 'Race', route: '' },
    { title: 'Others', route: '' },
  ];
}
