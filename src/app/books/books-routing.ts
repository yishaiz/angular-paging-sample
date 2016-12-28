import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BooksComponent }    from './books/books.component';

const booksRoutes: Routes = [
  { path: 'books', component: BooksComponent}

];

export const booksRouting: ModuleWithProviders = RouterModule.forChild(booksRoutes);
