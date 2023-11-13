import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  displayedColumns: string[];

  constructor() {
    this.displayedColumns = []; // Add the initialization here
  }

  ngOnInit() {
    // Your component initialization code here
  }
}
