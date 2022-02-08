import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/service/theme.service';
import { Observable } from 'rxjs';
import { Response } from '../../shared/models/response.model';
import { GeneralParametricsService } from 'src/app/data/services/general-parametrics.service';
import { BrandInfo, MenuItem } from 'src/app/data/models/general-parametrics';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public activatedMenuItemId: string = '';
  public brandInfo$: Observable<Response<BrandInfo>> = new Observable<Response<BrandInfo>>();
  public menuItems$: Observable<Response<MenuItem[]>> = new Observable<Response<MenuItem[]>>();
  private _isDarkTheme$: Observable<boolean> = new Observable<boolean>();
  constructor(private _themeService: ThemeService,
    private _generalParametricsService: GeneralParametricsService) { }

  ngOnInit() {
    this._isDarkTheme$ = this._themeService.getDarkTheme();
    this._getBrandInfo();
    this._getMenuItems();
  }

  private _getBrandInfo(): void {
    this.brandInfo$ = this._generalParametricsService.getBrandInfo();
  }

  private _getMenuItems(): void {
    this.menuItems$ =
      this._generalParametricsService.getMenuItemsByRole('10000001-0001-0001-0001-000000000001');
  }

  toggleTheme(checked: boolean) {
    this._themeService.setDarkTheme(checked);
  }

  changeActivatedMenuItemId(id: string) {
    this.activatedMenuItemId = id;
  }
}
