import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  quizQuestions = [
    { text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctOption: 1 },
    { text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctOption: 2 },
  ];

  currentQuestionIndex = 0;
  answers: any[] = [];
  score = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitQuiz() {
    let score = 0;

    this.quizQuestions.forEach((question, index) => {
      if (this.answers[index] === question.options[question.correctOption - 1]) {
        score++;
      }
    });

    this.score = score;
    this.router.navigate(['/score', this.score, this.quizQuestions.length]);
  }

  goToNextQuestion() {
    this.currentQuestionIndex++;
  }

}
