import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LearnMenuComponent } from './learn-menu/learn-menu.component';
import { ExercicesMenuComponent } from './exercices-menu/exercices-menu.component';
import { Ex1Component } from './ex1/ex1.component';
import { CardComponent } from './subcomponents/card/card.component';
import { NavbarComponent } from './subcomponents/navbar/navbar.component';
import { OffcanvasComponent } from './subcomponents/offcanvas/offcanvas.component';
import { TitleTagComponent } from './subcomponents/title-tag/title-tag.component';
import { LearnCellComponent } from './learn-cell/learn-cell.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    LearnMenuComponent,
    ExercicesMenuComponent,
    Ex1Component,
    CardComponent,
    NavbarComponent,
    OffcanvasComponent,
    TitleTagComponent,
    LearnCellComponent,
    CellComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
