import { MisManagementModule } from './mis-management.module';

describe('MisManagementModule', () => {
  let misManagementModule: MisManagementModule;

  beforeEach(() => {
    misManagementModule = new MisManagementModule();
  });

  it('should create an instance', () => {
    expect(misManagementModule).toBeTruthy();
  });
});
