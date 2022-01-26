import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DictatorService } from '../service/dictator.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private dicService: DictatorService) { }

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    birthday: ['', Validators.required],
    description: ['', Validators.required]
  });

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.registerForm.value);
    this.dicService.postDictator(this.registerForm.value).subscribe(() => {
    });
    window.location.reload();
  }

}
