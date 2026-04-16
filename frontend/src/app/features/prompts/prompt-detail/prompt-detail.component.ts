import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromptService } from '../../../core/services/prompt.service';
import { Prompt } from '../../../core/models/prompt.model';

@Component({
  selector: 'app-prompt-detail',
  templateUrl: './prompt-detail.component.html'
})
export class PromptDetailComponent implements OnInit {

  prompt?: Prompt;

  constructor(
    private route: ActivatedRoute,
    private service: PromptService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe(data => {
      this.prompt = data;
    });
  }
}