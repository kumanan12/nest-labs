import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ProxyService {

    constructor(private httpService: HttpService) { }

    getData(): Promise<any> {
        return this.httpService.axiosRef.get('https://cat-fact.herokuapp.com/facts/')
          .then(response => response.data);
      }
}
    

