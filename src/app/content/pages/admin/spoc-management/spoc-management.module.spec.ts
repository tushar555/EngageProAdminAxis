import { SpocManagementModule } from './spoc-management.module';

describe('SpocManagementModule', () => {
  let spocManagementModule: SpocManagementModule;

  beforeEach(() => {
    spocManagementModule = new SpocManagementModule();
  });

  it('should create an instance', () => {
    expect(spocManagementModule).toBeTruthy();
  });
});
