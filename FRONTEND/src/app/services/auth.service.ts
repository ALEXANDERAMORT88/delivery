import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http//localhost:2500/auth';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(LoginData: {email: string, password: string}){
        return this.http.post<{token: String}>(`${API_URL}/login`, LoginData);
    };
    setToken(token: string){
        localStorage.setItem('acces_token', token);
    };

    getToken(): string | null {
        return localStorage.getItem('access_token');
    };
};