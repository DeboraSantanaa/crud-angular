import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //no angular é utilizado para requisiçoes HTTP 
import { Observable } from 'rxjs'; //observar a execução do codigo e esperar algo, utilizado para fluxo de dados
import { Pessoa } from './pessoa'; //interface criada




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

private url ='http://localhost:3000/pessoa';

//constructor é onde é inicializadotodas as variaveis e/ou declarar uma importação
//no parenteses é incializado as importações e nas chaves incializada as variaveis
constructor(private http:HttpClient) {}

//função para obter todas as pessoas
getAll(){
  return this.http.get<Pessoa[]>(this.url); //a url seria a requisão http que esta na url
}

//função para inserir pessoas
create(pessoa : Pessoa) : Observable<Pessoa> {
return this.http.post<Pessoa>(this.url, pessoa);
}

}
