import { Module } from "@nestjs/common";
import { ProductSearchController } from "./product-search.controller";
import { ProductSearchService } from "./product-search.service";

@Module({
    imports: [],
    controllers: [ProductSearchController],
    providers: [ProductSearchService],
  })
  export class ProductSearchModule {

  }
