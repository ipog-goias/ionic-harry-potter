import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

    //estou declarando um vetor (names: [] ou names: Array<string>)
  //o = [], você está iniciliazando o vetor;
  characters: any[] = [];

  // injeção de dependência
  constructor(private service: CharactersService) { }

  ngOnInit() {
    this.listarCharacters();
  }

  public listarCharacters(){
    //Vamos aqui, invocar o serviço para buscar todo o contéudo do endereço do harry potter
    /*this.service.listarPeople().subscribe((people: any) => {
      /*console.log(`O valor de count é: ${people.count}`)
      console.log(`O valor de next é: ${people.next}`)
      console.log(`O valor de result[0] é: ${people.results[0].name}`)*/
      //this.peoples = people.results;
      /*console.log(this.peoples);*/
   // });

   this.service.listarCharacters().subscribe((dadosDaInternet: any) => {
    this.characters = dadosDaInternet;
   });
  }

}
