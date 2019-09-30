import { Directive, OnChanges, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[CountTo]'
})
export class CountToDirective implements OnChanges, OnInit {
  @Input()
  CountTo: number;
  @Input()
  from = 0;
  @Input()
  duration = 4;

  e = this.el.nativeElement;
  num: number;
  refreshInterval = 30;
  steps: number;
  step = 0;
  increment: number;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.CountTo) {
      this.start();
    }
  }

  calculate() {
    this.duration = this.duration * 1000;

    this.steps = Math.ceil(this.duration / this.refreshInterval);
    this.increment = ((this.CountTo - this.from) / this.steps);
    this.num = this.from;
  }

  tick() {
    setTimeout(() => {
      this.num += this.increment;
      this.step++;
      if (this.step >= this.steps) {
        this.num = this.CountTo;
        this.e.textContent = this.CountTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } else {
        this.e.textContent = Math.round(this.num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Math.round(this.num);
        this.tick();
      }
    }, this.refreshInterval);
  }

  start() {
    this.calculate();
    this.tick();
  }
}
