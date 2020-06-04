import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  uri = "http://localhost:4000/members";
  constructor(private http: HttpClient) { }

  addMember(MemberName, MemberBio, MemberAge) {
    const member = {
      MemberName,
      MemberBio,
      MemberAge
    };
    this.http.post(`${this.uri}/add`, member).subscribe(response => console.log(response));
  }
}
