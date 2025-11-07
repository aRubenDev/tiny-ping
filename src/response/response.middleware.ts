import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    //aqui obtengo el mensaje que retorna la petición y lo formateo, no será para la ruta de not found
    if (res.statusCode === 404) {
      return res.status(404).json({
        statusCode: 404,
        message: res.message || 'Resource not foundssss',
      });
    } else {
      const oldJson = res.json;
      res.json = function (data: any) {
        const formattedResponse = {
          statusCode: res.statusCode,
          data: data,
        };
        oldJson.call(this, formattedResponse);
      };
    }
    next();
  }
}
