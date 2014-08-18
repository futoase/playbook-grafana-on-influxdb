define(['settings'],
function (Settings) {
  "use strict";

  return new Settings({

    datasources: {
      influxdb: {
        type: 'influxdb',
        url: 'http://'+window.location.hostname+':8086/db/{{ influxdb.dbname }}',
        username: '{{ influxdb.username }}',
        password: '{{ influxdb.password }}',
      },
      grafana: {
        type: 'influxdb',
        url: 'http://'+window.location.hostname+':8086/db/grafana',
        username: '{{ influxdb.username }}',
        password: '{{ influxdb.password }}',
        grafanaDB: true
      },
    },

    search: {
      max_results: 20
    },

    default_route: '/dashboard/file/default.json',

    saved_changes_warning: true,

    playlist_timespan: '1m',

    timezoneOffset: null,

  });
});
