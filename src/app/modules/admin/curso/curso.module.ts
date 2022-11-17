import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CursoComponent } from 'app/modules/admin/curso/curso.component';

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
        RouterModule.forChild(cursoRoutes)
    ]
})
export class CursoModule
{
}
