// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    QuestionsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // Import browser animations module
    AppRoutingModule // Include the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
