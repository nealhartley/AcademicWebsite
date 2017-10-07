import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { HonoursComponent } from './honours/honours.component';
import { PhdComponent } from './phd/phd.component';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

let routes: Routes = [
  {path: 'education', component: EducationComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'teaching', component: TeachingComponent},
  {path: 'consulting', component: ConsultingComponent},
  {path: 'honours', component: HonoursComponent},
  {path: 'phd', component: PhdComponent},
  {path: '', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ResearchComponent,
    TeachingComponent,
    ConsultingComponent,
    HonoursComponent,
    PhdComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
