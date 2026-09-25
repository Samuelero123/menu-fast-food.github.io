const test = require('node:test');
const assert = require('node:assert/strict');

test('the PHP authentication endpoints should exist', async () => {
  const fs = require('node:fs');
  const path = require('node:path');

  assert.equal(fs.existsSync(path.join(__dirname, '..', 'backend', 'login.php')), true);
  assert.equal(fs.existsSync(path.join(__dirname, '..', 'backend', 'admin-check.php')), true);
  assert.equal(fs.existsSync(path.join(__dirname, '..', 'backend', 'logout.php')), true);
});
