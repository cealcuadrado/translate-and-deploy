import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  localesList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
