/**
 * Перечисление возможных типов ошибок, возникающих в сервисе анонимизации.
 */
export enum AnonymizeErrorType {
  /** Ошибка валидации входных данных или ответа сервера */
  VALIDATION = 'validation',
  /** Ошибка сети при запросе к API */
  NETWORK = 'network',
  /** Ошибка на стороне сервера (5xx) */
  SERVER = 'server',
  /** Ошибка аутентификации/авторизации */
  AUTH = 'authentication',
  /** Неизвестная или необработанная ошибка */
  UNKNOWN = 'unknown',
}

/**
 * Структура объекта ошибки, используемая в сервисе анонимизации.
 */
export interface AnonymizeError {
  /** Тип ошибки из перечисления AnonymizeErrorType */
  type: AnonymizeErrorType;
  /** Техническое сообщение об ошибке (для логов, отладки) */
  message: string;
  /** Сообщение об ошибке, предназначенное для пользователя */
  userMessage: string;
  /** Дополнительные детали ошибки (например, ошибки валидации Zod) */
  details?: unknown;
}
