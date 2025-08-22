import { Component } from '@angular/core';

@Component({
  selector: 'app-casino-list',
  standalone: false,
  templateUrl: './casino-list.html',
  styleUrl: './casino-list.css'
})
export class CasinoList {

  casino_list = {
    'lucky5':'lucky5',
    'lucky7':'lucky7',
    'lucky7eu':'lucky7eu',
    'lucky7eu2':'lucky7eu2',
    'lucky15':'lucky15',
    'andarbahar':'ab20',
    'andarbahar2':'abj',
    'ab3':'ab3',
    'ab4':'ab4',
    'card32-A':'card32',
    'card32-B':'card32eu',
    'dragontigert20':'dt20',
    'dragontigeroneday':'dt6',
    'dragontigerliont20':'dtl20',
    'dragontigert202':'dt202',

  };

}
