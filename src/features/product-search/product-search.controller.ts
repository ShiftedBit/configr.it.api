import { Controller, Get, Req, Param } from "@nestjs/common";
import { ROUTE_PRODUCT_SEARCH } from "routes";
import { ProductSearchService } from "./product-search.service";

export interface IProductSearchRequest {
    keyword: string
}

@Controller()
export class ProductSearchController {
  constructor(private productSearchService: ProductSearchService) {

  }

  @Get(ROUTE_PRODUCT_SEARCH)
  productSearch(@Req() request, @Param() params: IProductSearchRequest) {
      return this.productSearchService.searchOnAmazon(params.keyword);
  }
 
}