describe('Server Utilities tests', () => {
  beforeEach(() => {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  describe('submitServerInfo tests', () => {
    it('should add a new server to allServers on submitServerInfo()', () => {
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should not allow empty input', () => {
      serverNameInput.value = '';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(0);
    });

    it('should not allow characters', () => {
      serverNameInput.value = '#';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(0);
    });
  });

  describe('updateServerTable tests', () => {
    it('should append a new table row containing the server name and their earnings', () => {
      submitServerInfo();
      updateServerTable();
      const serverTableRow = document.querySelectorAll(
        '#serverTable tbody tr td'
      );

      expect(serverTableRow.length).toEqual(2);
      expect(serverTableRow[0].textContent).toBe('Alice');
      expect(serverTableRow[1].textContent).toBe('$0.00');
    });

    it('should append multiple rows for each server', () => {
      serverNameInput.value = 'Alice';
      submitServerInfo();
      serverNameInput.value = 'Mike';
      submitServerInfo();
      serverNameInput.value = 'Steve';
      submitServerInfo();

      updateServerTable();

      const serverTableRow = document.querySelectorAll(
        '#serverTable tbody tr td'
      );

      expect(serverTableRow[0].textContent).toBe('Alice');
      expect(serverTableRow[1].textContent).toBe('$0.00');
      expect(serverTableRow[2].textContent).toBe('Mike');
      expect(serverTableRow[3].textContent).toBe('$0.00');
      expect(serverTableRow[4].textContent).toBe('Steve');
      expect(serverTableRow[5].textContent).toBe('$0.00');
    });
  });

  afterEach(() => {
    // teardown logic
    serverTbody.textContent = '';
    serverId = 0;
    allServers = {};
    
  });
});
