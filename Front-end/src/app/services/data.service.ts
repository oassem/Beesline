import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result:any;
  token:any;
  uId:any;
   public imageUrl="http://127.0.0.1:8000/public/";
   private base_url="http://127.0.0.1:8000/api";
   constructor( 
    private http:HttpClient,
    
    ) { }
    
    AddUser(data:any): Observable<any>{

     return this.http.post(`${this.base_url}/users`,JSON.stringify(data))
    }
    // getUserData():
    AuthUser(data:any){
      console.log(data);
      return this.http.post(`http://127.0.0.1:8000/api/login`,data).pipe(map(res=>{
       
       this.result=res;
       this.token =this.result['0'];
       this.uId=this.result['1'];
       this. result={token:this.token ,userId:this.uId}
    
     if( this. result){
     localStorage.setItem('token', this.token );
     localStorage.setItem('userId',this.uId);
     return true;
    }
    return false;
    }));
    }
 
 
  // signUp(data: Partial<{ firstName: string | null; lastName: string | null; email: string | null; password: string | null; address: string | null; confirmPass: string | null; city: string | null; phoneNumber: string | null; }>){
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //   return this.http.post('http://127.0.0.:8000/api/users',JSON.stringify(data),{headers:headers})
  // }
}
