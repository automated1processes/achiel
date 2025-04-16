/**
 * Simple logger utility for Medusa application
 * This provides consistent logging across the application
 */

const LOG_LEVEL = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

// Set the minimum log level (can be configured via environment variables)
const MINIMUM_LOG_LEVEL = process.env.LOG_LEVEL ? 
  LOG_LEVEL[process.env.LOG_LEVEL] : LOG_LEVEL.INFO;

/**
 * Format log message with timestamp and additional data
 */
const formatLogMessage = (level: string, message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const dataStr = data ? ` ${JSON.stringify(data)}` : '';
  return `[${timestamp}] [${level}] ${message}${dataStr}`;
};

/**
 * Logger implementation with standard logging levels
 */
const logger = {
  debug: (message: string, data?: any) => {
    if (MINIMUM_LOG_LEVEL <= LOG_LEVEL.DEBUG) {
      console.debug(formatLogMessage('DEBUG', message, data));
    }
  },
  
  info: (message: string, data?: any) => {
    if (MINIMUM_LOG_LEVEL <= LOG_LEVEL.INFO) {
      console.info(formatLogMessage('INFO', message, data));
    }
  },
  
  warn: (message: string, data?: any) => {
    if (MINIMUM_LOG_LEVEL <= LOG_LEVEL.WARN) {
      console.warn(formatLogMessage('WARN', message, data));
    }
  },
  
  error: (message: string, data?: any) => {
    if (MINIMUM_LOG_LEVEL <= LOG_LEVEL.ERROR) {
      console.error(formatLogMessage('ERROR', message, data));
    }
  }
};

export default logger;