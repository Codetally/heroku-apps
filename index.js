exports.topics = [
  { name: 'apps',        description: 'manage apps' },
  { name: 'config',      description: 'manage app config vars' },
  { name: 'info',        hidden: true, },
  { name: 'maintenance', description: 'manage maintenance mode for an app' },
  { name: 'ps',          description: 'manage dynos (dynos, workers)' },
  { name: 'stack',       description: 'manage the stack for an app' },
];

exports.commands = [
  require('./commands/apps/info').apps,
  require('./commands/apps/info').root,
  require('./commands/config'),
  require('./commands/config/get'),
  require('./commands/config/unset'),
  require('./commands/maintenance/index'),
  require('./commands/maintenance/off'),
  require('./commands/maintenance/on'),
  require('./commands/ps'),
  require('./commands/stack'),
  require('./commands/stack/set'),
];
