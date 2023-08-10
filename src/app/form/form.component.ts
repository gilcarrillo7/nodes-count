import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent {
  @Output() onCalculation = new EventEmitter<number>();
  values: { wide: number; level: number } = { wide: 0, level: 0 };

  handleChange($event: number, name: "wide" | "level") {
    let count = 0;
    this.values[name] = $event;
    for (let i = this.values.level; i >= 0; i--)
      count += Math.pow(this.values.wide, i);
    this.onCalculation.emit(count);
  }
}
