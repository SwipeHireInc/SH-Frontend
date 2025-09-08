import { Component } from '@angular/core';
import {NavigationPanelComponent} from '../navigation-panel/navigation-panel.component';
import {RouterOutlet} from '@angular/router';


interface AlphabetLetter {
  name: string;
}

interface IndexedLetter {
  index: number;
  letter: string;
}

@Component({
  selector: 'app-applicant-page',
  imports: [
    NavigationPanelComponent,
    RouterOutlet
  ],
  templateUrl: './applicant-page.component.html',
  styleUrl: './applicant-page.component.scss'
})


export class ApplicantPageComponent {

  kazakhAlphabet: AlphabetLetter[] = [
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

  alphabetIndexes: number[] = [
  3, 1, 4, 2, 5, 7, 6, 9, 8, 10,
  12, 11, 14, 13, 15, 17, 16, 19, 18, 20,
  22, 21, 24, 23, 25, 27, 26, 29, 28, 30,
  32, 31, 34, 33, 35, 37, 36, 39, 38, 40,
  42, 41
  ];

  indexedAlphabet: IndexedLetter[] = this.alphabetIndexes.map(i => ({
    index: i,
    letter: this.kazakhAlphabet[i - 1].name
  }));

  getindalp():void{
    console.log(this.indexedAlphabet)
  }

  ngOnInit() {
    this.getindalp();
  }

}
