import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos: Pensamento[]=[]

  constructor(private service:PensamentoService){  }

  ngOnInit():void{
    this.service.listar().subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }

}
