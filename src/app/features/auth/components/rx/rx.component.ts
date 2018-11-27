import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {
  
  private data$: Observable<any> = of([]);
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  constructor() { }

  ngOnInit() {
  }

  init() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(42);
      }, 1000); 
      setTimeout(() => {
        resolve(43);
      }, 2000);      
    })
    .then(res => console.log('promise->', res))
    .catch(err => console.log(err));
     const arrayData = [];
     // création de l'observable
     this.data$ = new Observable(observer => {
          setTimeout(() => {
            arrayData.push(42)
              observer.next(arrayData);
          }, 1000);

          setTimeout(() => {
            arrayData.push(43)
              observer.next(arrayData);
          }, 2000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
      })
      .pipe(
        map((data: any) => data.map(n => n * 2)),
        map((dataUpdated: any[]) => {
          return dataUpdated.map(n => n * 2)
        }),
        catchError(err => (console.log(err), err))
      )


      // // subscription à l'observable
      // let subscription = this.data$.subscribe(
      //     value => {
      //       console.log('observable->', value)
      //       this.values.push(value)
      //     },
      //     error => this.anyErrors = true,
      //     () => this.finished = true
      // );
  }
}
