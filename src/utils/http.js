const HTTP_SERVER_ERROR = 500;
const HTTP_NOT_FOUND = 404;
const HTTP_BAD_REQUEST = 400;
const HTTP_PERMANENT_REDIRECT = 301;

export function isServerError(status) {
  return status >= HTTP_SERVER_ERROR;
}

export function isNotFound(status) {
  return status === HTTP_NOT_FOUND;
}

export function isRedirect(status) {
  return status >= HTTP_PERMANENT_REDIRECT && status < HTTP_BAD_REQUEST;
}
