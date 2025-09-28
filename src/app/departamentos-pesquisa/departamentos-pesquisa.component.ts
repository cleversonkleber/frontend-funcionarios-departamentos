import { Component } from '@angular/core';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {
    departamentos=[
          { id: 1, nomeDepartamento: 'RH'},
          { id: 2, nomeDepartamento: 'Comercial'},
          { id: 3, nomeDepartamento: 'Expedição'},
          { id: 4, nomeDepartamento: 'Fabrica'},
          { id: 5, nomeDepartamento: 'Almoxerifado'},
          { id: 6, nomeDepartamento: 'Contabilidade'},
          { id: 7, nomeDepartamento: 'Recepção'},
          { id: 8, nomeDepartamento: 'Fiscal'},
          { id: 9, nomeDepartamento: 'Cadastro'},
          { id: 10, nomeDepartamento: 'Contas a receber'},
          { id: 11, nomeDepartamento: 'Cobrança'},
  ]
}
