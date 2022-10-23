import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private _firebase: AngularFireDatabase) {
  }

  async create(formData: any, path: string): Promise<any> {
    try {
      return await this._firebase.list(path).push(formData)
    } catch (error) {
      console.log("error in creation", error);
    }
  }

  edit(path: string, id: string, formdata: any) {
    console.log(formdata,"edit data")
    try {
      this._firebase.list(path).update(id, formdata)
    } catch (error) {
      console.log("error in UPdating", error);
    }
  }

  async remove(path: string, id: string) {
    await this._firebase.list(path).remove(id)
  }

  getAllData(path: string): Observable<any> {
    return this._firebase.list(path).snapshotChanges().pipe(map(changes =>
      changes.map((c: any) =>
        ({ key: c.payload.key, ...c.payload.val() })
      ))
    )
  }

}
