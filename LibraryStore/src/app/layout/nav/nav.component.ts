import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/service/theme.service';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/data/models/general-parametris';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[] = [];
  activatedMenuItemId: number = 0;
  public isDarkTheme$: Observable<boolean> = new Observable<boolean>();
  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme$ = this._themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this._themeService.setDarkTheme(checked);
  }

  changeActivatedMenuItemId(id: number) {
    this.activatedMenuItemId = id;
  }
}
