import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-departamento-cadastro',
  templateUrl: './departamento-cadastro.component.html',
  styleUrls: ['./departamento-cadastro.component.css']
})
export class DepartamentoCadastroComponent {

  departamento= new Departamento();
  salvar(departamentoForm: NgForm) {
    console.log(departamentoForm.value)
    departamentoForm.reset()
  }

}
class Departamento{
  nome:String=""
}
