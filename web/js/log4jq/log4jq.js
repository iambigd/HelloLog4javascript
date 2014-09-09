/* 
 * The log4jq is based on log4javascript framework
 * @auth bigd
 * @date 2014/9/9
 */

var log4jq = (function() {
    
    var comp = this;
  
    //default config
    var settings = {
        loggerName: 'log4jq',
        appender: {
            name: 'console',//or ajax
            layout: '%d{dd MMM yyyy HH:mm:ss,SSS} [%-5p] [%c] %m',
            level: 'ALL'
        }
    };
  
    comp.getLogger = function(_settings){
       
        var  opts = $.extend(settings,_settings);//jquery method
        
        // Create the logger
        var log = log4javascript.getLogger(opts.loggerName);
    
        //create console appender
        var consoleAppender = new log4javascript.BrowserConsoleAppender();
        
        //create layout
        var layout = new log4javascript.PatternLayout(opts.appender.layout);
        consoleAppender.setLayout(layout);
        
        log.setLevel(_getLogLv(opts.appender.level));
            
        log.addAppender(consoleAppender);
        
        return log;
    };
    
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

    return comp;
    
}());



