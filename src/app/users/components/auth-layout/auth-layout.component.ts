import { Component, OnInit, Output } from '@angular/core';
import { IUniversidad, UniversidadesGetResponse } from '../../../core/models/universidad/universidad.model';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent implements OnInit {
  @Output() universidadesList: IUniversidad[] = [];
  response: UniversidadesGetResponse;


  constructor() {
    this.response = {} as UniversidadesGetResponse;
  }

  ngOnInit(): void {

  }


}
