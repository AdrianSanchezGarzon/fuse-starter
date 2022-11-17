import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Curso} from './curso';

@Injectable({
    providedIn: 'root'
})
export class CursoService {
    // Private
    private _curso: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    getCursos(): Observable<any> {
        return this._httpClient.get<Curso[]>('api/apps/academy/courses').pipe(
            tap((response: Curso[]) => {
                this._curso.next(response);
            })
        );
    }
}
