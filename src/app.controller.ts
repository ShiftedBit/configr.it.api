import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ROUTE_PRODUCT_SEARCH } from './routes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
