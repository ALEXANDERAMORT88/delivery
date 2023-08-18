import { Injectable }from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer} from '../models/customer.model';

interface ApiResponse {
    result: Customer[]
};

const API_URL = 'http://localhost:2500/customers';

const generateHeaders = () => {
    const token = localStorage.getItem('acces_token');
    const bearer = `Bear ${token}`;
    const headers = new HttpHeaders().set('Authorization', bearer);
    return {headers};
}

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private http: HttpClient) {}

    getCustomerById(id: string){
        return this.http.get<Customer>(`${API_URL}/id/${id}`, generateHeaders());
    };

    getAllCustomers() {
        return this.http.get<ApiResponse>(API_URL, generateHeaders());
    };

    postCustomer(body: Customer){

        return this.http.post<string>(API_URL, body, generateHeaders());
    };

    deleteCustomer(id: string){
        return this.http.delete<string>(`${API_URL}/${id}`, generateHeaders());
    };

    putCustomer(id:string, body: Customer){
        return this.http.put<string>(`${API_URL}/${id}`, body, generateHeaders());
    };

}