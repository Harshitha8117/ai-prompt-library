import { Component, OnInit } from '@angular/core';
import { PromptService } from '../../../core/services/prompt.service';
import { Prompt } from '../../../core/models/prompt.model';

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html'
})
export class PromptListComponent implements OnInit {

  prompts: Prompt[] = [];

  constructor(private promptService: PromptService) {}

  ngOnInit(): void {
    this.promptService.getAll().subscribe(data => {
      this.prompts = data;
    });
  }
}