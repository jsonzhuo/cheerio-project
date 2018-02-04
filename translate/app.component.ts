import { Component, OnInit } from '@angular/core';
import { TranslateService } from './shared/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdmin = true;
  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: '华语', value: 'zh' },
    ];
    this.translate.use('zh');
  }

  isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }

  selectLang() {
    // set default;
    if (this.translate.currentLang === 'en') {
      this.translate.use('zh');
    }else {
      this.translate.use('en');
    }
    this.refreshText();
  }

  refreshText() {
    this.translatedText = this.translate.instant('hello world');
  }
}

