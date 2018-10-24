export default {
  "appenders": {
    "console": {
      "type": "console" // 可以设置成 console、file、dateFile三种
    },
    "trace": {
      "type": "dateFile",
      "encoding": "utf-8", // 设置文件编码格式
      "filename": "logs/access-", // 设置log输出的文件路劲和文件名
      "pattern": "yyyy-MM-dd.log", // 和上面同时使用 设置每天生成log名
      "alwaysIncludePattern": true,
      "maxLogSize ": 31457280 // 设置文件大小
    },
    "http": {
      "type": "logLevelFilter",
      "appender": "trace",
      "level": "trace", // 设置log输出的最低级别
      "maxLevel": "trace" // 设置log输出的最高级别 
      // log级别为8级 ALL<TRACE<DEBUG<INFO<WARN<ERROR<FATAL<MARK<OFF。默认级别是 OFF
    },
    "info": {
      "type": "dateFile",
      "encoding": "utf-8",
      "filename": "logs/info-",
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "layout": {
        "type": "pattern",
        "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
      },
      "compress": true
    },
    "maxInfo": {
      "type": "logLevelFilter",
      "appender": "info",
      "level": "debug",
      "maxLevel": "error"
    },
    "error": {
      "type": "dateFile",
      "encoding": "utf-8",
      "filename": "logs/error-",
      "pattern": "yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "layout": {
        "type": "pattern",
        "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
      },
      "compress": true
    },
    "minError": {
      "type": "logLevelFilter",
      "appender": "error",
      "level": "error"
    }
  },
  "categories": {
    "default": {
      "appenders": [
        "console",
        "http",
        "maxInfo",
        "minError"
      ],
      "level": "all"
    }
  }
}