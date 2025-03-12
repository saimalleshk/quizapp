import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  quizQuestions = [
    {
      text: 'What is the capital of France?',
      options: [
        'Paris',
        'Germany',
        'Berlin',
        'Madrid'],
      correctOption: 1,
      explanation: {
        correct: `<p><strong>Correct!</strong> Paris is the capital of France. You can learn more about <a href="https://en.wikipedia.org/wiki/Paris" target="_blank">Paris on Wikipedia</a>.</p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" alt="Eiffel Tower" width="300">`,
        incorrect: `<p><strong>Incorrect.</strong> The capital of France is not London, Berlin, or Madrid. It is <strong>Paris</strong>. You can find more information about <a href="https://en.wikipedia.org/wiki/Paris" target="_blank">Paris on Wikipedia</a>.</p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" alt="Eiffel Tower" width="300">`
      }
    },
    // Add more questions here if necessary
  ];

  currentQuestionIndex = 0;
  answers: any[] = [];
  showExplanation = false;
  explanationText: SafeHtml = '';
  showNextQuestionButton = false;
  showSubmitAssignmentButton = false;
  submitButtonDisabled = false;

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  submitAnswer() {
    if (!this.answers[this.currentQuestionIndex]) {
      alert('Please select an option.');
      return;
    }

    if (this.answers[this.currentQuestionIndex] === this.quizQuestions[this.currentQuestionIndex].options[this.quizQuestions[this.currentQuestionIndex].correctOption - 1]) {
      this.explanationText = this.sanitizer.bypassSecurityTrustHtml(this.quizQuestions[this.currentQuestionIndex].explanation.correct);
    } else {
      this.explanationText = this.sanitizer.bypassSecurityTrustHtml(this.quizQuestions[this.currentQuestionIndex].explanation.incorrect);
    }
    this.showExplanation = true;
    if (this.currentQuestionIndex === this.quizQuestions.length - 1) {
      this.showSubmitAssignmentButton = true;
    } else {
      this.showNextQuestionButton = true;
    }
    this.submitButtonDisabled = true;
  }

  goToNextQuestion() {
    this.showExplanation = false;
    this.showNextQuestionButton = false;
    this.submitButtonDisabled = false;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.quizQuestions.length) {
      this.submitQuiz();
    }
  }

  submitQuiz() {
    console.log('Submit Assignment button clicked...');
    this.router.navigate(['/score']).then((success) => {
      console.log('Navigation successful:', success);
    }).catch((error) => {
      console.error('Navigation error:', error);
    });
  }

}
