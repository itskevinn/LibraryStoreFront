import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { BooksRouting } from './books.routing';



@NgModule({
  declarations: [
    BooksComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRouting
  ]
})
export class BooksModule { }
