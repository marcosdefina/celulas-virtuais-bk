import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LearnMenuComponent } from './learn-menu/learn-menu.component';
import { ExercicesMenuComponent } from './exercices-menu/exercices-menu.component';
import { LearnCellComponent } from './learn-cell/learn-cell.component';
import { CellService } from './cell.service';
import { QuizzService } from './quizz.service';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'learn', component: LearnMenuComponent },
  { path: 'exercices', component: ExercicesMenuComponent },
  { path: 'learn/:id', component: LearnCellComponent },
  { path: 'quizz', component: QuizzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: QuizzService,
    useClass: QuizzService
  }, {
    provide: CellService,
    useClass: CellService
  }]
})
export class AppRoutingModule {}
