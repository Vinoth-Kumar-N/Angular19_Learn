import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from './todo';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  Task: string = "";
  Todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
    this.snackBar.open("✅Todos fetched successfully!", "Close", { duration: 1000 });
  }
  getAllTodos() {
    this.todoService.getAllTodos().subscribe({
      next: (res) => {
        this.Todos = res as Todo[]
        console.log(this.Todos);

      },
      error: (err) => {
        this.snackBar.open("❌ Failed to add task.", "Close", { duration: 3000 });
        console.error("Error fetching todos:", err);
        alert("Failed to fetch todos. Please try again later.");
      }
    })
  }
  addTask() {
    if (this.Task.trim() === "") {
      this.snackBar.open("❗Please enter a task.", "Close", { duration: 3000 });
      return;
    }
    this.todoService.AddTask(this.Task).subscribe({
      next: (res) => {
        this.snackBar.open("✅ Task added successfully!", "Close", { duration: 3000 });
        console.log("Task added successfully:", res);
        this.Task = ""; // Clear the input field after adding the task
        this.getAllTodos(); // Refresh the todos list
      },
      error: (err) => {
        console.error("Error adding task:", err);
        alert("Failed to add task. Please try again later.");
      }
    })
  }
  deleteTask(id : number) {
    this.todoService.DeleteTask(id).subscribe({
      next : (res) =>{
        this.snackBar.open("✅ Task deleted successfully!", "Close", { duration: 3000 });
        console.log("Task deleted successfully:", res);
        this.getAllTodos(); // Refresh the todos list
      },
      error : (err) => {
        console.error("Error deleting task:", err);
        this.snackBar.open("❌ Failed to delete task.", "Close", { duration: 3000 });
      }
    })
  }
  editTask(id: number) {
    if (this.Task.trim() === "") {
      this.snackBar.open("❗Please enter a New or Edited task.","Close", { duration: 3000});
      return;
    }
    this.todoService.EditTask(id, this.Task).subscribe({
      next: (res) => {
        this.snackBar.open("✅ Task edited successfully!", "Close", { duration: 3000 });
        console.log("Task edited successfully:", res);
        this.Task = ""; // Clear the input field after editing the task
        this.getAllTodos(); // Refresh the todos list
      },
      error: (err) => {
        console.error("Error editing task:", err);
        this.snackBar.open("❌ Failed to edit task.", "Close", { duration: 3000 });
      }
    })
  }
  toggleTask(id: number) {
    this.todoService.ToggleTask(id).subscribe({
      next: (res) => {
        this.snackBar.open("✅ Task Conpleted successfully!", "Close", { duration: 3000 });
        console.log("Task toggled successfully:", res);
        this.getAllTodos(); // Refresh the todos list
      },
      error: (err) => {
        console.error("Error toggling task:", err);
        this.snackBar.open("❌ Failed to toggle task.", "Close", { duration: 3000 });
      }
    })
  }
}


