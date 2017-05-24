import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequirementsComponent } from './requirements/requirements.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { BasicSetComponent } from './basic-set/basic-set.component';
import { KicksComponent } from './kicks/kicks.component';
import { MasterCombinationsComponent } from './master-combinations/master-combinations.component';
import { OneStepsComponent } from './one-steps/one-steps.component';
import { FormsComponent } from './forms/forms.component';
import { BasicFormsComponent } from './forms/basics/basic-forms.component';
import { PyongAhnChoDanComponent } from './forms/pyong-ahn-cho-dan/pyong-ahn-cho-dan.component';
import { ChilSangEeRhoComponent } from './forms/chil-sang-ee-rho/chil-sang-ee-rho.component';
import { PyongAhnEDanComponent } from './forms/pyong-ahn-e-dan/pyong-ahn-e-dan.component';
import { PyongAhnSamDanComponent } from './forms/pyong-ahn-sam-dan/pyong-ahn-sam-dan.component';
import { PyongAhnSaDanComponent } from './forms/pyong-ahn-sa-dan/pyong-ahn-sa-dan.component';
import { PyongAhnODanComponent } from './forms/pyong-ahn-o-dan/pyong-ahn-o-dan.component';
import { ChilSangIlRhoComponent } from './forms/chil-sang-il-rho/chil-sang-il-rho.component';
import { BassaiComponent } from './forms/bassai/bassai.component';
import { ChilSangSamRoComponent } from './forms/chil-sang-sam-ro/chil-sang-sam-ro.component';
import { SelfDefenseComponent } from './self-defense/self-defense.component';
import { BreakingComponent } from './breaking/breaking.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/requirements',
    pathMatch: 'full'
  },
  { path: 'single-page',
    component: SinglePageComponent,
    children: []
  },
  { path: 'requirements',
    component: RequirementsComponent,
    children: []
  },
  { path: 'basic-set',
    component: BasicSetComponent,
    children: []
  },
  { path: 'kicks',
    component: KicksComponent,
    children: []
  },
  { path: 'master-combinations',
    component: MasterCombinationsComponent,
    children: []
  },
  { path: 'one-steps/:type',
    component: OneStepsComponent,
    children: []
  },
  { path: 'one-steps',
    component: OneStepsComponent,
    children: []
  },
  { path: 'self-defense',
    component: SelfDefenseComponent,
    children: []
  },
  { path: 'breaking',
    component: BreakingComponent,
    children: []
  },
  { path: 'forms',
    component: FormsComponent,
    children: []
  },
  { path: 'forms/basic',
    component: BasicFormsComponent,
    children: []
  },
  { path: 'forms/pyong-ahn-cho-dan',
    component: PyongAhnChoDanComponent,
    children: []
  },
  { path: 'forms/chil-sang-ee-rho',
    component: ChilSangEeRhoComponent,
    children: []
  },
  { path: 'forms/pyong-ahn-e-dan',
    component: PyongAhnEDanComponent,
    children: []
  },
  { path: 'forms/pyong-ahn-sam-dan',
    component: PyongAhnSamDanComponent,
    children: []
  },
  { path: 'forms/pyong-ahn-sa-dan',
    component: PyongAhnSaDanComponent,
    children: []
  },
  { path: 'forms/pyong-ahn-o-dan',
    component: PyongAhnODanComponent,
    children: []
  },
  { path: 'forms/chil-sang-il-rho',
    component: ChilSangIlRhoComponent,
    children: []
  },
  { path: 'forms/bassai',
    component: BassaiComponent,
    children: []
  },
  { path: 'forms/chil-sang-sam-ro',
    component: ChilSangSamRoComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
