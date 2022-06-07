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
    window.open('https://www.precolandia.com.br/lista-casamento/li-150510', '_blank')
  }

}
