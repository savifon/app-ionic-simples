import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})

export class FeedPage {
  public objeto_feed = {
    titulo : "Savio Fonseca",
    data : "November 5, 1995",
    descricao : "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qntd_likes : 12,
    qntd_comments : 4,
    time_comment : "12h ago"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Savio Fonseca";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public soma_numeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.soma_numeros(10, 55);
    //console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = ( data as any );
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
