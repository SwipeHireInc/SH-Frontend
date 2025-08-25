// selectable-grid.component.ts
import { Component, input, output, signal } from '@angular/core';


@Component({
  selector: 'app-selectable-grid',
  standalone: true,
  imports: [],
  template: `
    <div class="input-wrapper">
      <label>{{ label() }}</label>

      @if (available().length > 0) {
        <select (change)="onSelect($event)">
          <option value="">{{ label().toLowerCase() }}</option>
          @for (item of available(); track item) {
            <option [value]="item">{{ item }}</option>
          }
        </select>
      } @else {
        <p class="empty">There are no elements</p>
      }

      @if (selected().length > 0) {
        <div class="grid">
          @for (item of selected(); track item) {
            <div class="grid-item">
              <p>{{ item }}</p>
              <button class="remove-btn" (click)="deselectItem(item)">✕</button>
            </div>
          }
        </div>
      } @else {
        <p class="empty">Ничего не выбрано</p>
      }
    </div>
  `,
  styles: [`
    .input-wrapper {
      margin: 20px 0 20px 0;
    }

    label {
      margin: 8px 8px 8px 0;
      color: white;
      font-size: 14px;
    }

    select {
      flex: 0 0 50px;
      padding: 12px 15px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      font-size: 16px;
      background: rgba(0, 0, 0, 0.2);
      color: white;
      transition: all 0.3s ease;
      box-sizing: border-box;

    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 10px;
    }

    .grid-item {
      position: relative;
      border: 1px solid #ccc;
      border-radius: 6px;
      backdrop-filter: blur(20px);
      margin: 10px 0 8px 0;
      color: white;
      font-size: 16px;

      p{
        padding: 2px 0 2px 10px;
      }
    }

    .remove-btn {
      position: absolute;
      right: 6px;
      bottom: 2px;
      background: transparent;
      color: red;
      font-size: 16px;
      padding: 0;
      border: none;
      cursor: pointer;
    }

    .empty {
      font-size: 13px;
      color: #888;
      margin: 8px 0 8px 0;
    }
  `]
})
export class SelectableGridComponent {
  label = input.required<string>();
  initialItems = input<string[]>([]);

  selectedChange = output<string[]>();

  available = signal<string[]>([]);
  selected = signal<string[]>([]);

  ngOnInit() {
    this.available.set(this.initialItems());
  }

  private updateSelected(values: string[]) {
    this.selected.set(values);
    this.selectedChange.emit(this.selected());
  }

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (!value) return;

    if (!this.selected().includes(value)) {
      this.updateSelected([...this.selected(), value]);
      this.available.set(this.available().filter(i => i !== value));
    }

    // сбрасываем select после выбора
    (event.target as HTMLSelectElement).value = '';
  }

  deselectItem(item: string) {
    this.updateSelected(this.selected().filter(i => i !== item));

    if (this.initialItems().includes(item) && !this.available().includes(item)) {
      this.available.set([...this.available(), item]);
    }
  }
}
