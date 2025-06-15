import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  isAddingTask = signal(false);

  constructor(private tasksService: TasksService) {}

  selectedUserTasks = computed(() =>
    this.tasksService.getUSerTasks(this.userId())
  );

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
