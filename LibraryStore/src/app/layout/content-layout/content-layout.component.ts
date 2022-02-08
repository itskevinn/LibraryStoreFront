import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';

import { themes } from '../../core/constants/theme';
import { ThemeService } from '../../core/service/theme.service';
@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  private _overlayContainer: OverlayContainer ;

  currentTheme: string = '';
  currentActiveTheme$ = this._themeService.getDarkTheme().pipe(
    map((isDarkTheme: boolean) => {
      const [lightTheme, darkTheme] = themes;

      this.currentTheme = isDarkTheme ? lightTheme.name : darkTheme.name;

      if (this._overlayContainer) {
        const overlayContainerClasses = this._overlayContainer.getContainerElement()
          .classList;
        const themeClassesToRemove = Array.from(
          overlayContainerClasses
        ).filter((item: string) => item.includes('-theme'));
        if (themeClassesToRemove.length) {
          overlayContainerClasses.remove(...themeClassesToRemove);
        }
        overlayContainerClasses.add(this.currentTheme);
      }

      return this.currentTheme;
    })
  );

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
    if (this._overlayContainer) {
      this._overlayContainer
        .getContainerElement()
        .classList.add(this.currentTheme);
    }
  }

}
