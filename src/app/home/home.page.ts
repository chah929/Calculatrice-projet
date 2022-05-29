import { Component } from '@angular/core';
const ERROR = 'SYNTAXE_ERROR';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public operation = '';

  constructor() { }

  ngOnInit() {
  }

  effacer(): void {
    this.operation = '';
  }

  effacer1(): void {

    if (this.operation === ERROR) {
      this.operation = '';
    }
    try {
      // eslint-disable-next-line no-eval
      this.operation = this.operation.slice(0, -1);
    } catch {
      this.operation = '';
    }
  }

  egale(): void {
    try {
      // eslint-disable-next-line no-eval
      this.operation = eval(this.operation);
    } catch {
      this.operation = ERROR;
    }
  }

  taper(n: any): void {

    if (typeof this.operation === 'number') {
      this.operation = '';
    }

    if (this.operation === ERROR) {
      this.operation = '';
    }
    this.operation += n;
  }

}

