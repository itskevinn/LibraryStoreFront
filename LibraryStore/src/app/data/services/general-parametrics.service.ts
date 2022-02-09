import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../shared/models/response.model';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrandInfo, MenuItem } from '../models/general-parametrics';
@Injectable({
  providedIn: 'root'
})
export class GeneralParametricsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public getMenuItemsByRole(roleId: string): Observable<Response<MenuItem[]>> {
    return this.http.get<Response<MenuItem[]>>(`${this.baseUrl}/MenuItem/GetByRole/${roleId}`)
      .pipe(catchError(err => { throw err }));
  }

  public getBrandInfo(): Observable<Response<BrandInfo>> {
    return this.http.get<Response<BrandInfo>>(`${this.baseUrl}/BrandInfo/GetBrandInfo`)
      .pipe(catchError(err => { throw err }));
  }
}
