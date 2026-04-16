import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PromptService } from '../../../core/services/prompt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompt-form',
  templateUrl: './prompt-form.component.html'
})
export class PromptFormComponent {

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(20)]],
    complexity: [1, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private service: PromptService,
    private router: Router
  ) {}

  submit() {
    if (this.form.invalid) return;

    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}