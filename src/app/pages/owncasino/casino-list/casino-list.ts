import { Component } from '@angular/core';

@Component({
  selector: 'app-casino-list',
  standalone: false,
  templateUrl: './casino-list.html',
  styleUrl: './casino-list.css'
})
export class CasinoList {

  casino_list = [
    'lucky5',
    'lucky7',
    'lucky7eu',
    'lucky7eu2',
    'lucky15',
    'andarbahar',
    'andarbahar2',
    'ab3',
    'ab4'
  ];

}
