import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-presente',
  templateUrl: './lista-presente.component.html',
  styleUrls: ['./lista-presente.component.css']
})
export class ListaPresenteComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }
 

  ngOnInit(): void {
  }

  toLista() {
    window.open('https://lista.havan.com.br/Convidado?Codigo=&DataCasamento=2022-09-17&TipoLista=1&Nome=laura+e+diego', '_blank')
  }

}
