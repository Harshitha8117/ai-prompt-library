import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PromptListComponent } from './features/prompts/prompt-list/prompt-list.component';
import { PromptDetailComponent } from './features/prompts/prompt-detail/prompt-detail.component';
import { PromptFormComponent } from './features/prompts/prompt-form/prompt-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptListComponent,
    PromptDetailComponent,
    PromptFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}