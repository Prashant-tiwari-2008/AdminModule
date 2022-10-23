import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-model',
  templateUrl: './blog-model.component.html',
  styleUrls: ['./blog-model.component.css']
})
export class BlogModelComponent implements OnInit {
  @Input() Header: string = '';
  @Input() Path: string = '';
  selectedFile: any;
  public imgURL: string | ArrayBuffer | null = "assets/images/testphoto.jpg";
  public FormData!: FormGroup;
  dropdownSettings: IDropdownSettings = {};

  public technology = [
    { value: "Angular", label: "Angular" },
    { value: "React", label: "React" },
    { value: "NextJs", label: "NextJS" },
    { value: "Nodejs", label: "Nodejs" },
    { value: "Javascript", label: "Javascript" },
  ]


  constructor(private _fb: FormBuilder, private storage: AngularFireStorage, private blogService: BlogService, private imageUpload: ImageUploadService) {
    this.FormData = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
      developerName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      projectUrl: ['', [Validators.required]],
      GitHubUrl: [''],
      startDate: [''],
      priority: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      // detailDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      idField: 'value',
      textField: 'label',
    };
  }

  /**
   * 
   * selecting for image for preview
   */
  public selectedImage(event: Event): void {
    this.selectedFile = (event.target as HTMLInputElement).files;
    if ((event.target as HTMLInputElement).files!.length === 0)
      return;
    const mimeType = (event.target as HTMLInputElement).files![0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supporeted');
      return;
    }
    var reader = new FileReader();
    // const imagePath = (event.target as HTMLInputElement).files![0];
    reader.readAsDataURL((event.target as HTMLInputElement).files![0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  onSubmitForm(FormDetails: FormGroup) {
    const uploadedImage = this.imageUpload.uploadImage(this.selectedFile[0], this.Path)
    uploadedImage.task.snapshotChanges().pipe(
      finalize(() =>
        uploadedImage.ref.getDownloadURL().subscribe(downloadURL => {
          this.blogService.create({ ...FormDetails.value, image: downloadURL }, this.Path).then((item) => {
            console.log("created successfullt", item)
          })
        }
        ))
    ).subscribe();
  }

  resetForm() {
    this.FormData.reset();
  }

}
