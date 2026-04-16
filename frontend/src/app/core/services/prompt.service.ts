import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prompt } from '../models/prompt.model';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private api = 'http://localhost:8000/prompts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Prompt[]> {
    return this.http.get<Prompt[]>(this.api + '/');
  }

  getOne(id: string): Observable<Prompt> {
    return this.http.get<Prompt>(`${this.api}/${id}/`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.api}/create/`, data);
  }
}