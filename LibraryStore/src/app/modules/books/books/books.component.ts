import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/data/models/book';
import { BookService } from 'src/app/data/services/book.service';
import { TableColumn } from 'src/app/shared/components/table/model/table-column.model';
import { Response } from '../../../shared/models/response.model'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  tableTitle: string = 'Libros';
  tableColumns: TableColumn[] = [
    {
      dataKey: 'id',
      name: 'Id',
      isSortable: false,
      position: 'left'
    },
    {
      dataKey: 'name',
      name: 'Nombre',
      isSortable: true,
      position: 'right'
    }
  ];
  books$: Observable<Response<Book[]>> = new Observable<Response<Book[]>>();
  constructor(private _bookService: BookService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(): void {
    this.books$ = this._bookService.gets();
  }

}
