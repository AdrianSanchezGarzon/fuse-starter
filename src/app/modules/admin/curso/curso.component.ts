import {Component, OnInit, ViewEncapsulation, NgModule} from '@angular/core';
import {CursoService} from "./curso.service";
import {Curso} from "./curso";
import {FuseConfirmationModule, FuseConfirmationService} from '@fuse/services/confirmation';


@Component({
    selector     : 'curso',
    templateUrl  : './curso.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit
{
    public cursos: Array<Curso>[];
    public mostrar:boolean=false;
    public alumnos:Array<string> = ["sergio","pablo","juan","pedro","Alejandro"];

    /**
     * Constructor
     */
    constructor(private _cursoService:CursoService, private _fuseConfirmationService: FuseConfirmationService)
    {
    }

    ngOnInit(): void {
        const dialogRef = this._fuseConfirmationService.open({
            title: 'listar',
            message: 'seguro?',
            actions: {
                confirm: {
                    label: 'listar'
                }
            }
        });
        this._cursoService.getCursos().subscribe(data=>this.cursos=data);
    }

    cambiarbool(estado:boolean) : void{
        if (this.mostrar==false)
            this.mostrar = estado;
        else this.mostrar = false;
    }
}
