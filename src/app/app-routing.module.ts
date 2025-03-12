import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
