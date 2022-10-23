import { AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { finalize } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';


@Component({
  selector: 'app-add-skill-model',
  templateUrl: './add-skill-model.component.html',
  styleUrls: ['./add-skill-model.component.css']
})
export class AddSkillModelComponent implements OnInit {

  public selectedSkill: any;

  @Input()
  set skillId(inputdata: string) {
    if (inputdata) {
      console.log("input data", inputdata)
      this.selectedSkill = inputdata;
      this.imgURL = this.selectedSkill.image;
      this.AddSkills.patchValue({
        // Icon: this.selectedSkill.Icon,
        Name: this.selectedSkill.Name,
        StartDate: this.selectedSkill.StartDate,
        Rating: this.selectedSkill.Rating,
        Status: this.selectedSkill.Status
      })
    }
  }


  public Skillkey: any;
  public AddSkills!: FormGroup;
  public editSkills: any;
  selectedFile: any;
  public imgURL: string | ArrayBuffer | null = "assets/images/testphoto.jpg";
  Path = "skills"

  constructor(private imageUpload: ImageUploadService, private blogService: BlogService, private _fb: FormBuilder) {
    this.AddSkills = this._fb.group({
      Icon: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      StartDate: ['', [Validators.required]],
      Rating: ['', [Validators.required]],
      Status: ['', [Validators.required]],
    })
  }


  ngOnInit(): void { }

  /**
   * selecting for image for preview
   */
  selectedImage(event: any) {

    this.selectedFile = event.target.files;
    if (event.target.files!.length === 0)
      return
    const mimeType = event.target.files![0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert('only image are supported')
      return
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  onSubmitForm(skillDetails: FormGroup) {
    debugger
    if (this.selectedSkill) {
      this.blogService.edit(this.Path, this.selectedSkill.key, { ...skillDetails.value, image: this.imgURL })
      this.selectedSkill = '';
    } else {
      const uploadedImage = this.imageUpload.uploadImage(this.selectedFile[0], this.Path)
      uploadedImage.task.snapshotChanges().pipe(
        finalize(() =>
          uploadedImage.ref.getDownloadURL().subscribe(downloadURL => {
            this.blogService.create({ ...skillDetails.value, image: downloadURL }, this.Path).then((item) => {
              console.log("created successfullt", item)
            })
          }
          ))
      ).subscribe();
    }
  }

  resetForm() {
    this.imgURL = "assets/images/testphoto.jpg";
    this.AddSkills.reset();
  }

}
