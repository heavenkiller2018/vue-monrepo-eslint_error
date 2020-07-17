import * as cookie from '@/utils/cookies';
describe('cookies', () => {
  it('SidebarStatus', () => {
    cookie.setSidebarStatus('sidebar_status');
    expect(cookie.getSidebarStatus()).toBe('sidebar_status');
  });
});
