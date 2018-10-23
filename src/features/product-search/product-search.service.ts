import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductSearchService {
    searchOnAmazon(keyword: string) {
        return keyword;
    }
}