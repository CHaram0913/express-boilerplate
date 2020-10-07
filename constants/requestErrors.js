const REQUEST_ERRORS = {
  BAD_REQUEST: {
    code: 'BAD_REQUEST',
    status: 400,
    message: '잘못된 요청입니다. 입력한 정보를 확인해주세요.',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    status: 401,
    message: '권한이 없습니다. 로그인을 해주세요.',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    status: 403,
    message: '잘못된 접근 또는 접근 권한이 없습니다.',
  },
  RESOURCE_NOT_FOUND: {
    code: 'RESOURCE_NOT_FOUND',
    status: 404,
    message: '존재하지 않는 리소스에 대한 요청입니다.',
  },
  UNKNOWN_RESOURCE_URL: {
    code: 'UNKNOWN_RESOURCE_URL',
    status: 404,
    message: '존재하지 않는 리소스 URL에 대한 요청입니다.',
  },
  RESOURCE_ALREADY_EXISTS: {
    code: 'RESOURCE_ALREADY_EXISTS',
    status: 409,
    message: '같은 리소스가 이미 존재합니다.',
  },
  AUTHENTICATION_TIMEOUT: {
    code: 'AUTHENTICATION_TIMEOUT',
    status: 419,
    message: '인증정보 / 로그인 세션 등이 만료되었습니다. 재인증 / 로그인 해주세요.',
  },
  SERVER_SIDE_ERROR: {
    code: 'SERVER_SIDE_ERROR',
    status: 500,
    message: 'Unknown 에러: 서버 이슈가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  },
};

module.exports = REQUEST_ERRORS;
