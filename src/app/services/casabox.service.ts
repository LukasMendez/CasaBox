import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasaBox } from '../models/casa-box';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasaboxService {

  private casaBoxes: BehaviorSubject<CasaBox[]>;

  constructor(private http: HttpClient) 
  { 
    this.casaBoxes = new BehaviorSubject<CasaBox[]>([]);
  }

  /**
   * GET: /api/casabox
   */
  public getCasaBoxes(): Observable<CasaBox[]> {
    const casaBoxObj = this.http.get<CasaBox[]>(environment.casaBoxApi + "/api/casabox");
    // If this method is called again we update the observable
    casaBoxObj.subscribe((response: CasaBox[]) => {
      this.casaBoxes.next(response);
    });
    return this.casaBoxes;
  }

    /**
   * GET: /api/casabox/{id}
   */
  public getCasaBox(id: number): Observable<CasaBox> {
    return this.http.get<CasaBox>(environment.casaBoxApi + "/api/casabox/" + id );
  }




}
