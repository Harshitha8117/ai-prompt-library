import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromptListComponent } from './features/prompts/prompt-list/prompt-list.component';
import { PromptDetailComponent } from './features/prompts/prompt-detail/prompt-detail.component';
import { PromptFormComponent } from './features/prompts/prompt-form/prompt-form.component';

const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: 'prompts/:id', component: PromptDetailComponent },
  { path: 'create', component: PromptFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}