import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TABLE_COMPONENTS } from './casino-tables/table-loader';

@Component({
  selector: 'app-casino',
  standalone: false,
  templateUrl: './casino.html',
  styleUrl: './casino.css'
})

export class Casino implements OnInit {
  // @Input() gameName!: string;
  // @Input() dealerName!: string;
  // @Input() chips!: number;
  // @Input() customTemplate!: TemplateRef<any>;

  gameName: string = '';
  gameActive: boolean = false;
  activatedGame = [
    'lucky5',
    'lucky7',
    'lucky7eu',
    'lucky7eu2'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.gameName = params.get('gameName') || 'default';
      if (this.gameName && this.activatedGame.includes(this.gameName)) {
        this.gameActive = true;
      }
      this.loadGameContent();
    });
  }

  loadGameContent() {
    console.log(`Load game: ${this.gameName}`);
    // You can use *ngIf or dynamic component loader here
  }
  get component() {
    return TABLE_COMPONENTS[this.gameName] || null;
  }
}
