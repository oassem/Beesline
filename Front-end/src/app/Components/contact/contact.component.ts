import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { APIService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  flag: any;

  constructor(
    private viewportScroller: ViewportScroller,
    private myService: APIService
  ) {}

  ngOnInit(): void {}

  get validSubject() {
    return this.contactForm.controls.subject.valid;
  }

  get validMessage() {
    return this.contactForm.controls.message.valid;
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  add(btn: any) {
    if (this.contactForm.valid) {
      this.flag = false;
      this.myService
        .addContact({
          subject: this.contactForm.controls.subject.value,
          message: this.contactForm.controls.message.value
        })
        .subscribe();
    } else {
      this.flag = true;
    }
    this.contactForm.controls.subject.setValue('');
    this.contactForm.controls.message.setValue('');
    btn.blur();
  }
}
