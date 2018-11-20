import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input() value: string;
  @Input() date: Date;
  @Input() element: string;
  values = ['none', 'Pending', 'In Progress', 'Fixing', 'Done'];

  constructor() { }

  ngOnInit() { }

  onClick() {
    let currentIndex = this.values.indexOf(this.value);
    this.value = currentIndex != -1 ? currentIndex < this.values.length - 1 ? this.values[currentIndex + 1] : this.values[0] : this.value;
  }

  getClass(): string {
    return !this.value ? "" : this.element ? this.element + '  ' + this.value.replace(' ', '').toLowerCase() : this.value.replace(' ', '').toLowerCase();
  }

}
