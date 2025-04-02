import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  getVehicles() {
    throw new Error('Method not implemented.');
  }
 
  //A constructor is a special function that gets called when an object of the class is created.//
  //Here, it is used to inject the HttpClient service into the class.//


  
  constructor(private _httpClient:HttpClient) { }

  //-----------------------------------BASE URL----------------------------------------//

  //Code Optimization:
//replace the complete url with quotes: store it in a variable (e.g. baseUrl) and replace the url throughout the code.//

//baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

//getSortedVehicles(column:any,order:any):Observable<any>{
 // return this._httpClient.get(this.baseUrl+column+"&order"+order);}
 

  //HttpClient is an Angular service used to make HTTP requests (e.g., GET, POST, DELETE).//
  
  //The private keyword means that _httpClient can only be accessed inside this class.//

  //_httpClient is now ready to send HTTP requests to an API.//

//---------------------------------------------------------------------------------------//
  
  // getVechiles()---This is a function that can be called when we need to fetch data.//

//-----------------------------------------------------------------------------------------//

 //-----------------------------Return Type: Observable<any>----------------------------------//

//The method returns an Observable, which is a special object in Angular that handles async operations.
//Observable<any> means it can return any type of data.
//Since API calls take some time, Observable ensures we can handle the response when it's ready.  



  getVechiles():Observable<any>{

    //---------- _httpClient.get() sends an HTTP GET request to the given URL.---------------//
            //The URL ('https') is the API endpoint that provides vehicle data.
             //This function fetches data from the API.
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }
  
  //-----------------FILTER------------------------------///
      getFilteredVehicles(term:any):Observable<any>{ 
        return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }

  //------------------------SORT------------------------------------//

  getSortedVehicles(column:any,order:any){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy=' +column+'&order='+order)
  }

  //-----------------------------------------DELETE------------------------------------------//

  deletVehilce(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  getPaginatedVehicles(limit:any , page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data);
  }

}
