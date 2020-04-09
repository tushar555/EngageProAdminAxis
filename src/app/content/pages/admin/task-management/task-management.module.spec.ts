import { TaskManagementModule } from './task-management.module';

describe('TaskManagementModule', () => {
  let taskManagementModule: TaskManagementModule;

  beforeEach(() => {
    taskManagementModule = new TaskManagementModule();
  });

  it('should create an instance', () => {
    expect(taskManagementModule).toBeTruthy();
  });
});
