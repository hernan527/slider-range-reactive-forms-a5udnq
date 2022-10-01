import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({ 
  selector: "app", 
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss']
  })
export class AppComponent implements AfterViewInit {
  @ViewChild("slider", { static: false }) slider2: ElementRef;
  @ViewChild("circle1", { static: false }) circle1: ElementRef;
  @ViewChild("circle2", { static: false }) circle2: ElementRef;
  @ViewChild("circle3", { static: false }) circle3: ElementRef;
  @ViewChild("circle4", { static: false }) circle4: ElementRef;
  @ViewChild("circle5", { static: false }) circle5: ElementRef;
  value = 20;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      input_tip: [20, Validators.required],
      tip: [20, Validators.required]
    });

    this.form.get("tip").valueChanges.subscribe(val => {
      console.log(val);
      this.form.get("input_tip").setValue(val);
    });
  }

  changeInputTip(value: any) {
    console.log(+value);
    this.form.get("tip").setValue(+value);
    this.slider2.nativeElement = +value;
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    const slider = this.slider2.nativeElement as HTMLElement;
    console.log(slider);
    slider.oninput = () => {
      const sliderValue = slider as HTMLInputElement;
      slider.style.background =
        "linear-gradient(to right, #f36621 0%, #f36621 " +
        sliderValue.value +
        "%, #eeeeee " +
        sliderValue.value +
        "%, #eeeeee)";
      // console.log(sliderValue.value);

      parseInt(sliderValue.value, 10) >= 20
        ? (this.circle1.nativeElement.style.background = "#f36621")
        : (this.circle1.nativeElement.style.background = "#cbcbcb");

      parseInt(sliderValue.value, 10) >= 40
        ? (this.circle2.nativeElement.style.background = "#f36621")
        : (this.circle2.nativeElement.style.background = "#cbcbcb");

      parseInt(sliderValue.value, 10) >= 60
        ? (this.circle3.nativeElement.style.background = "#f36621")
        : (this.circle3.nativeElement.style.background = "#cbcbcb");

      parseInt(sliderValue.value, 10) >= 80
        ? (this.circle4.nativeElement.style.background = "#f36621")
        : (this.circle4.nativeElement.style.background = "#cbcbcb");

      parseInt(sliderValue.value, 10) >= 100
        ? (this.circle5.nativeElement.style.background = "#f36621")
        : (this.circle5.nativeElement.style.background = "#cbcbcb");
    };
  }
}
