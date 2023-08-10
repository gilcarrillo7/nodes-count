import { Component, Input } from "@angular/core";

@Component({
  selector: "app-count",
  templateUrl: "./count.component.html",
})
export class CountComponent {
  @Input() nodes: number = 0;
}
