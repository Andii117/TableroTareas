import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  todo = [''];
  do   = [''];
  done = [''];

  tarea = '';

  constructor() { }

  ngOnInit(): void {
    this.BorradoInicial();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  //Adiciona la tarea presionando el boton Adicionar tarea
  Adiciona(tarea: string) {
    if (tarea == null || tarea == "") { return; }
    this.todo.push(
      tarea
    );
    this.tarea = "";
  }

  //Adiciona la tarea presionando enter
  agregarTarea() {
    if (this.tarea == null || this.tarea == "") { return; }
    console.log("tarea adicionanda con enter:" + this.tarea);
    this.todo.push(
      this.tarea
    );
    this.tarea = "";
  }

  Borrar() {
    this.tarea = "";
    this.done = [''];
  }

  BorradoInicial() {
    this.todo = [''];
    this.do   = [''];
    this.done = [''];

    this.tarea = '';
  }

}
