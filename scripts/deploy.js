var ghpages = require('gh-pages');

console.log('Starting github pages deploy...');
 
ghpages.publish('public', {
  branch: 'master',
  repo: 'git@github.com:MattBarbieri/mattbarbieri.github.io.git',
  user: {
    name: 'MSBarbieri',
    email: 'matheussouzabarbieri@gmail.com'
  }
}, function(err) { console.error('Error: ' + err); });

console.log('Deploy finished.');
