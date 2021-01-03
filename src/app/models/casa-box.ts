export class CasaBox {
    public boxNummer: number;
    public ledig: Boolean;
    public m2: number; 
    public m3: number;
    public pris: number;
    public type: CasaBoxType;
    public beskrivelse: string;
}

export enum CasaBoxType{
    Garage,
    Depotrum
}
