import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent implements OnChanges {
  @Input() context?: { value: string };
  @Output() titleChanged = new EventEmitter<string>();

  readonly titles: string[] = [
    'Page 1, sans plus',
    'La belle page 2',
    'La trop rarement lue page 3',
  ];
  currentPage?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.currentValue) {
      // some obscure conditions here...
      if (this.context?.value || '' > '123456123') {
        // setTimeout(() => {
        this.setPage(2);
        // }, 100);
      } else this.setPage(1);
    }
  }
  setPage(value: number): void {
    this.currentPage = value;
    this.titleChanged.emit(this.titles[value - 1]);
  }
}
