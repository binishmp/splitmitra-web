/* Fails when CHANGELOG.md has no entry for the version in package.json. Run by the build and by `npm run check:version`. */
const fs = require('fs');
const v = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
const log = fs.readFileSync('CHANGELOG.md', 'utf8');
if (!new RegExp('^## v' + v.replace(/\./g, '\\.') + ',', 'm').test(log)) {
  console.error(`CHANGELOG.md has no "## v${v}, Month D, YYYY" entry. Run "npm run bump -- patch|minor|major" for a new change, then describe it in CHANGELOG.md.`);
  process.exit(1);
}
console.log(`Version ${v} has a changelog entry.`);
