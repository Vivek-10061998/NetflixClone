import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  searchResult: any[] = [];
  showAutocomplete: boolean = false;
  isSearching: boolean = false;

  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
    this.searchForm.controls['movieName'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => {
        this.isSearching = true;
        this.showAutocomplete = true;
        return this.service.getsearchMovie({ movieName: value })
      })
    ).subscribe((result) => {
      this.isSearching = false;
      this.searchResult = result.results;
    });
  }

  selectAutocomplete(result: any) {
    this.searchForm.patchValue({ movieName: result.title });
    this.showAutocomplete = false;
    this.submitForm();
  }

  submitForm() {
    console.log(this.searchForm.value, 'searchForm')
    this.service.getsearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie##')
      this.searchResult = result.results;
    })
  }
}
