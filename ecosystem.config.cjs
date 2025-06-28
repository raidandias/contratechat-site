module.exports = {
  apps: [
    {
      name: 'contratechat-site',
      script: 'npx',
      args: 'serve dist --single -l tcp://0.0.0.0:${PORT:-3000}',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
