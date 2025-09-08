import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild, inject } from '@angular/core';

@Directive({
  selector:'[appUnderLineAnimation]',
  standalone: true,
  host:{
  "(mouseleave)": "onleave()",
    "(mouseenter)":"onmove()"
  }
})

export class UnderLineAnimation{
  private renderer = inject(Renderer2);

  @Input('appUnderLineAnimation') underline!: HTMLDivElement;

  onleave() {
    this.renderer.setStyle(this.underline, "margin-left", "0px")
  }

  onmove() {
    this.renderer.setStyle(this.underline, "margin-left", "110px")
  }
}

export interface AlphabetLetter {
  name: string;
}

export interface IndexedLetter {
  index: number;
  letter: string;
}

const ZERT1: AlphabetLetter[] = [
  { name: 'А' }, { name: 'Ә' }, { name: 'Б' }, { name: 'В' },
  { name: 'Г' }, { name: 'Ғ' }, { name: 'Д' }, { name: 'Е' },
  { name: 'Ё' }, { name: 'Ж' }, { name: 'З' }, { name: 'И' },
  { name: 'Й' }, { name: 'К' }, { name: 'Қ' }, { name: 'Л' },
  { name: 'М' }, { name: 'Н' }, { name: 'Ң' }, { name: 'О' },
  { name: 'Ө' }, { name: 'П' }, { name: 'Р' }, { name: 'С' },
  { name: 'Т' }, { name: 'У' }, { name: 'Ұ' }, { name: 'Ү' },
  { name: 'Ф' }, { name: 'Х' }, { name: 'Һ' }, { name: 'Ц' },
  { name: 'Ч' }, { name: 'Ш' }, { name: 'Щ' }, { name: 'Ъ' },
  { name: 'Ы' }, { name: 'І' }, { name: 'Ь' }, { name: 'Э' },
  { name: 'Ю' }, { name: 'Я' }
];




export function encodeText(text: string, shift: number): string {
  return text.split('').map(char => {
    const index = ZERT1.findIndex(l => l.name === char);
    if (index === -1) return char;

    const newIndex = (index + shift) % ZERT1.length;
    return ZERT1[newIndex].name;
  }).join('');
}
