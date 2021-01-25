import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CasaBox } from '../models/casa-box';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CasaBoxVariantDto } from '../models/casa-box-variant-dto';

@Injectable({
  providedIn: 'root'
})
export class CasaboxService {

  private casaBoxes: BehaviorSubject<CasaBox[]>;

  private selectedCasaboxVariant: BehaviorSubject<CasaBoxVariantDto>;
  private allCasaBoxVariants: BehaviorSubject<CasaBoxVariantDto[]>;

  constructor(private http: HttpClient) {
    this.casaBoxes = new BehaviorSubject<CasaBox[]>([]);
    this.selectedCasaboxVariant = new BehaviorSubject<CasaBoxVariantDto>(null);
    this.allCasaBoxVariants = new BehaviorSubject<CasaBoxVariantDto[]>(null);
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
    return this.http.get<CasaBox>(environment.casaBoxApi + "/api/casabox/" + id);
  }

  /**
   * GET: /api/CasaBoxVariant/Available?m2=4&m3=10&type=garage
   * @param m2 m2
   * @param m3 m3
   * @param type type
   */
  public CheckAvailability(m2: number, m3: number, type: string): Observable<Boolean> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('m2', m2.toString());
    params = params.append('m3', m3.toString());
    params = params.append('type', type);


    return this.http.get<Boolean>(environment.casaBoxApi + "/api/CasaBoxVariant/Available", { params: params });
  }

  /**
   * GET: api/CasaBoxVariant/ByIds?m2=4&m3=10&type=garage
   */
  public GetCasaBoxVariant(m2: number, m3: number, type: string): Observable<CasaBoxVariantDto> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('m2', m2.toString());
    params = params.append('m3', m3.toString());
    params = params.append('type', type);

    return this.http.get<CasaBoxVariantDto>(environment.casaBoxApi + "/api/CasaBoxVariant/ByIds", { params: params });
  }

  public GetCasaBoxVariants(): Observable<CasaBoxVariantDto[]> {
    return this.http.get<CasaBoxVariantDto[]>(environment.casaBoxApi + "/api/CasaBoxVariant");
  }

  public SetSelectedCasaBoxVariant(casaboxVariant: CasaBoxVariantDto){
    this.selectedCasaboxVariant.next(casaboxVariant);
  }

  public GetSelectedCasaBoxVariant() : Observable<CasaBoxVariantDto> {
    return this.selectedCasaboxVariant;
  }




}
