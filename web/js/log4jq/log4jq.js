/* 
 * The log4jq is based on log4javascript framework
 * @auth bigd
 * @date 2014/9/9
 */

var log4jq = (function($) {

    // Create main log4javascript object; this will be assigned public properties
    function log4jq () {};

    var log = null;//log4javascript instance
    var log4jq = new log4jq();
    log4jq.version = '0.1';
    log4jq.author = 'bigd';
    log4jq.github = 'https://github.com/iambigd';

   //public method
    log4jq.configue = function(_settings){
        $.extend(settings,_settings);//jquery method
    };

    log4jq.getLogLv = function(){
        var currentLv =  $.cookie("log4jq");
        return  currentLv != null ?  currentLv: 'OFF';
    };

    log4jq.setLogLv = function(lv){
        $.cookie("log4jq",lv,{ path: '/'});
//        log.setLevel(_getLogLv('OFF'));
    }

    log4jq.disable = function(){
        log4jq.setLogLv('OFF')
//        log.setLevel(_getLogLv('OFF'));
    };

    log4jq.getLogger = function(_settings){

        var  opts = $.extend(settings,_settings);//jquery method

        // Create the logger
       log = log4javascript.getLogger(opts.loggerName);

        //create console appender
        var consoleAppender = new log4javascript.BrowserConsoleAppender();

        //create layout
        var layout = new log4javascript.PatternLayout(opts.appender.layout);
        consoleAppender.setLayout(layout);
        //set log level
        log.setLevel(_getLogLv(opts.appender.level));

        log.addAppender(consoleAppender);

        return log;
    };

    //private method
    _getLogLv = function(lv){
        var log4jLv = null;
        switch (lv){
            case 'ALL':
                log4jLv = log4javascript.Level.ALL;
                break;
            case 'TRACE':
                log4jLv = log4javascript.Level.TRACE;
                break;
            case 'DEBUG':
                log4jLv = log4javascript.Level.DEBUG;
                break;
            case 'INFO':
                log4jLv = log4javascript.Level.INFO;
                break;
            case 'WARN':
                log4jLv = log4javascript.Level.WARN;
                break;
            case 'ERROR':
                log4jLv = log4javascript.Level.ERROR;
                break;
            case 'OFF':
                log4jLv = log4javascript.Level.OFF;
                break;
            default:
            log4jLv = log4javascript.Level.ALL;
        }
        return log4jLv;
    };

    //write default log level
    log4jq.setLogLv(log4jq.getLogLv());

    //default config
    var settings = {
        loggerName: 'log4jq',
        appender: {
            name: 'console',//or ajax
            layout: '%d{dd MMM yyyy HH:mm:ss,SSS} [%-5p] [%c] %m{1}',
            level: log4jq.getLogLv()
        }
    };

    window.log4jq = log4jq;
    return log4jq;

})(jQuery);





