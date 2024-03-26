import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { DeletedTodoComponent } from './components/deleted-todo/deleted-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DeletedTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //projeye import edince kütüphane çalışır
    FormsModule //addTodo hmtl içindeki submit butonu için ilk olarak eklemem lazım
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
