import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CursoComponent } from 'app/modules/admin/curso/curso.component';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

const cursoRoutes: Route[] = [
    {
        path     : '',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [
        CursoComponent
    ],
    imports     : [
        RouterModule.forChild(cursoRoutes),
        /*BrowserModule  */CommonModule
    ]
})
export class CursoModule
{
}
