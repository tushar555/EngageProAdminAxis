import { ExpertsManagementModule } from './experts-management.module';

describe('ExpertsManagementModule', () => {
  let expertsManagementModule: ExpertsManagementModule;

  beforeEach(() => {
    expertsManagementModule = new ExpertsManagementModule();
  });

  it('should create an instance', () => {
    expect(expertsManagementModule).toBeTruthy();
  });
});
