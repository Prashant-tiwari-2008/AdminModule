import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../models/file-upload';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private basePath = '/upload';
  constructor(private storage: AngularFireStorage) { }

  uploadImage(file: FileUpload, path: string) {
    debugger
    const filePath = `${this.basePath}/${path}/${file!.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.percentageChanges().subscribe((precentage: any) => {
      if (Math.round(precentage) === 100) {
        alert("image uploaded successfully")
      }
    })
    return { task, ref }
  }
}
