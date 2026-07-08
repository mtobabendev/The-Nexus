import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSavePointPayload } from './memoryBankUtils.js';

test('buildSavePointPayload includes the selected module and backup metadata', () => {
  const payload = buildSavePointPayload({
    selectedModule: 'Coding Penny',
    doctrine: ['Site = cockpit'],
    backupIndex: [{ name: 'Local save point' }],
  });

  assert.equal(payload.selectedModule, 'Coding Penny');
  assert.equal(payload.doctrine[0], 'Site = cockpit');
  assert.equal(payload.backupIndex[0].name, 'Local save point');
  assert.match(payload.savePoint, /T/);
});
