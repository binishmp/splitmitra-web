/* Usage: npm run bump -- major|minor|patch   (default: minor)
 * Run before a major push. Updates package.json; the APK name, app versionName/versionCode and the zip name all follow it. */
const fs = require('fs'); const p = 'package.json';
const j = JSON.parse(fs.readFileSync(p, 'utf8')); let [a, b, c] = j.version.split('.').map(Number);
const kind = process.argv[2] || 'minor';
if (kind === 'major') { a++; b = 0; c = 0; } else if (kind === 'minor') { b++; c = 0; } else if (kind === 'patch') c++; else { console.error('Use major, minor or patch'); process.exit(1); }
j.version = `${a}.${b}.${c}`; fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n'); console.log('Version is now ' + j.version);
const d = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Kolkata' }); let log = fs.readFileSync('CHANGELOG.md', 'utf8');
log = log.replace(/\n## v/, `\n## v${j.version}, ${d}\n### Changed\n- (describe this change)\n\n## v`); fs.writeFileSync('CHANGELOG.md', log);
console.log('Added a CHANGELOG.md entry for ' + j.version + ': replace the placeholder line with what changed.');
