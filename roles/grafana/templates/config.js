define(['settings'],
function (Settings) {
  "use strict";

  return new Settings({

    elasticsearch: "http://"+window.location.hostname+":9200",

    datasources: {
      influx: {
        default: true,
        type: 'influxdb',
        url: 'http://'+window.location.hostname+':8086/db/{{ influxdb.dbname }}',
        username: '{{ influxdb.username }}',
        password: '{{ influxdb.password }}',
      }
    },

    default_route: '/dashboard/file/default.json',

    timezoneOffset: null,

    grafana_index: "grafana-dash",

    panel_names: [
      'text',
      'graphite'
    ]
  });
});
