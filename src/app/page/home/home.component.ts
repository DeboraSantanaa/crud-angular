import { Component } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
// importação do nosso SERVIÇO
import { PessoaService } from 'src/app/model/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
pessoas : Pessoa[] = [];

// constructor :: inicializar as informações
constructor(private service:PessoaService){}

//responsavel por carregar algo assim que a pagina abre
ngOnInit():void{
this.service.getAll().subscribe( 
  //subescrevi em respose
  response => {
    this.pessoas=response //response atribui o valor da função em pessoas
  }
)
}
}
