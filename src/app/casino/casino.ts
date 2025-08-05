import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casino',
  standalone: false,
  templateUrl: './casino.html',
  styleUrl: './casino.css'
})

export class Casino implements OnInit {
  gameName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.gameName = params.get('gameName') || 'default';
      this.loadGameContent();
    });
  }

  loadGameContent() {
    console.log(`Load game: ${this.gameName}`);
    // You can use *ngIf or dynamic component loader here
  }
}
