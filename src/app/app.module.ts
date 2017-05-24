import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { BasicSetComponent } from './basic-set/basic-set.component';
import { MasterCombinationsComponent } from './master-combinations/master-combinations.component';
import { BeltComponent } from './belt/belt.component';
import { OneStepsComponent } from './one-steps/one-steps.component';
import { SelfDefenseComponent } from './self-defense/self-defense.component';
import { BasicFormsComponent } from './forms/basics/basic-forms.component';
import { PyongAhnChoDanComponent } from './forms/pyong-ahn-cho-dan/pyong-ahn-cho-dan.component';
import { ChilSangEeRhoComponent } from './forms/chil-sang-ee-rho/chil-sang-ee-rho.component';
import { ChilSangIlRhoComponent } from './forms/chil-sang-il-rho/chil-sang-il-rho.component';
import { PyongAhnEDanComponent } from './forms/pyong-ahn-e-dan/pyong-ahn-e-dan.component';
import { PyongAhnSamDanComponent } from './forms/pyong-ahn-sam-dan/pyong-ahn-sam-dan.component';
import { PyongAhnSaDanComponent } from './forms/pyong-ahn-sa-dan/pyong-ahn-sa-dan.component';
import { PyongAhnODanComponent } from './forms/pyong-ahn-o-dan/pyong-ahn-o-dan.component';
import { ChilSangSamRoComponent } from './forms/chil-sang-sam-ro/chil-sang-sam-ro.component';
import { BassaiComponent } from './forms/bassai/bassai.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { KicksComponent } from './kicks/kicks.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RequirementsComponent,
    BasicSetComponent,
    MasterCombinationsComponent,
    BeltComponent,
    OneStepsComponent,
    SelfDefenseComponent,
    BasicFormsComponent,
    PyongAhnChoDanComponent,
    ChilSangEeRhoComponent,
    ChilSangIlRhoComponent,
    PyongAhnEDanComponent,
    PyongAhnSamDanComponent,
    PyongAhnSaDanComponent,
    PyongAhnODanComponent,
    ChilSangSamRoComponent,
    BassaiComponent,
    SinglePageComponent,
    KicksComponent,
    BreakingComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
