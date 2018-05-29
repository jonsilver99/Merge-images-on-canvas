import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/types';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiDataService {

    private Address: string = "http://www.mocky.io/v2/5b00281e3100007d0076def9"
    private ImageResolveEndpoint: string = "http://localhost:4200/image"

    constructor(private HttpReqs: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.HttpReqs.get(this.Address)
            .map((data: any) => {
                const products: Product[] = data.products
                return products
            })
    }

}
