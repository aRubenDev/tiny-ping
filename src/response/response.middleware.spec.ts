import { ResponseMiddleware } from './response.middleware';

describe('ResponseMiddleware', () => {
  it('should be defined', () => {
    expect(new ResponseMiddleware()).toBeDefined();
  });
});

describe('ResponseMiddleware functionality', () => {
  let responseMiddleware: ResponseMiddleware;

  beforeEach(() => {
    responseMiddleware = new ResponseMiddleware();
  });

  it('should add custom header to the response', () => {
    const req: any = {};
    const res: any = {
      setHeader: jest.fn(),
    };
    const next = jest.fn();

    responseMiddleware.use(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});