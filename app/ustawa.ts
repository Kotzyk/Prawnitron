/**
 * Created by Mateusz on 2016-08-13.
 */
export interface IUstawa {
    prawo.tytul_skrocony: string;
    prawo.dokument_id: number;
    content_url: string;
    prawo.data_obowiazywania: string;
    prawo.zrodlo: string;
    prawo.isap_status_str: string;
    status_bool: boolean;
    prawo.rok: number;
    prawo.nr: number;
    prawo.poz: number;
    pages: number;
}

export class Ustawa implements IUstawa {
    constructor( public prawo.tytul_skrocony: string,
    private prawo.dokument_id: number,
    public content_url: string,
    public prawo.data_obowiazywania: string,
    public prawo.zrodlo: string,
    public prawo.isap_status_str: string,
    public status_bool: boolean,
    public prawo.rok: number,
    public prawo.nr: number,
    public prawo.poz: number,
    private pages: number){
        this.pages = 1;
        this.status_bool = (this.prawo.isap_status_str === "obowi\u0105zuj\u0105cy")? true: false
    }
    this.content_url = "http://docs.mojepanstwo.pl/htmlex/" + this.prawo.dokument_id+"_" + countPages() + ".html";
    countPages(): number{
        loop: while(!err){
            
        }
}
