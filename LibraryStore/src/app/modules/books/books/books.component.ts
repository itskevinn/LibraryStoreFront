import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/data/models/book';
import { BookService } from 'src/app/data/services/book.service';
import { CustomStyle, TableColumn } from 'src/app/shared/components/table/model/table-column.model';
import { Response } from '../../../shared/models/response.model'
import { SPAN } from '../../../core/constants/custom-table-styles';
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
      position: 'left',
    },
    {
      dataKey: 'name',
      name: 'Nombre',
      isSortable: true,
      position: 'left',
    },
    {
      dataKey: 'status',
      name: 'Estado',
      position: 'left',
      statusKey: true
    }
  ];
  books$: Observable<Response<Book[]>> = new Observable<Response<Book[]>>();
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(): void {
    this.books$ = this._bookService.gets();
  }

}
