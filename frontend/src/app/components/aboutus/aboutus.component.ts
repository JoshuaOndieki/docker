import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  imports: [CommonModule, JsonPipe],
})
export class AboutusComponent implements OnInit {
  info!: { name: string; age: number };

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get<{ name: string; age: number }>(
        `http://${window.location.hostname}:3000`
      )
      .subscribe((info) => (this.info = info));
  }
}
