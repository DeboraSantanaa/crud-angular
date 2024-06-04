import { Component } from '@angular/core';
import { PessoaService } from 'src/app/model/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
dados:Pessoa ={
  id:0,
  nome:'',
  email:'',
  idade:0
}
constructor(private service:PessoaService, private router:Router){}

enviar(){
this.service.create(this.dados) .subscribe(()=>{
  alert("criado com sucesso");
  this.router.navigate(['/']);
})
}
}
