import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from './Component';
import { Brand } from './Brand';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private baseUrl = 'http://127.0.0.1:8000/api/componentPCs/';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getComponent(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  addComponent(component: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, component);
  }

  updateComponent(id: number, component: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${id}/`, component);
  }

  deleteComponent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}/`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private baseUrl = 'http://127.0.0.1:8000/api/brands/';

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getBrand(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  addBrand(brand: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, brand);
  }

  updateBrand(id: number, brand: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${id}/`, brand);
  }

  deleteBrand(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}/`);
  }
}