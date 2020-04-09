import { AnnouncementManagementModule } from './announcement-management.module';

describe('AnnouncementManagementModule', () => {
  let announcementManagementModule: AnnouncementManagementModule;

  beforeEach(() => {
    announcementManagementModule = new AnnouncementManagementModule();
  });

  it('should create an instance', () => {
    expect(announcementManagementModule).toBeTruthy();
  });
});
