import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){}
  
  bannerResult:any=[]
  trendingMovieResult:any=[]
  actionMoviesResult:any=[]
  adventureMoviesResult:any=[]
  animationMoviesResult:any=[]
  comedyMoviesResult:any=[]
  documentryMoviesResult:any=[]
  thrillerMoviesResult:any=[]
  scienceFictionMoviesResult:any=[]

  ngOnInit(){
   this.bannerData();
   this.trendingData();
   this.actionData();
   this.animationData();
   this.thrillerData();
   this.comedyData();
   this.scienceFictionData();
   this.adventureData();
   this.documentData();
  }
  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerResult#')
      this.bannerResult=result.results;

    })
  }
  trendingData(){
   this.service.trendingMovieApiData().subscribe((result)=>{
    console.log(result,"abcd");
    this.trendingMovieResult =result.results
   })
  }
  actionData(){
    this.service.fetchActionMovies().subscribe((result=>{
      this.actionMoviesResult=result.results
      console.log(this.actionMoviesResult);
      
    }))
  }
  thrillerData(){
    this.service.fetchThirillerMovies().subscribe((result=>{
      this.thrillerMoviesResult=result.results
      console.log(this.thrillerMoviesResult,'ek second');
      
    }))
  }
  comedyData(){
    this.service.fetchComedyMovies().subscribe((result=>{
      this.comedyMoviesResult=result.results
      console.log(this.comedyMoviesResult);
      
    }))
  }
  adventureData(){
    this.service.fetchAdventureMovies().subscribe((result=>{
      this.adventureMoviesResult=result.results
    }))
  }
  scienceFictionData(){
    this.service.fetchCience_fictionMovies().subscribe((result=>{
      this.scienceFictionMoviesResult=result.results
    }))
  }
  animationData(){
    this.service.fetchAnimationMovies().subscribe((result=>{
      this.animationMoviesResult=result.results
    }))
  }
  documentData(){
    this.service.fetchDocumentMovies().subscribe((result=>{
      this.documentryMoviesResult=result.results
    }))
  }


}
