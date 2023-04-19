import { Component } from "@angular/core";

@Component({
  selector: "hugo-nx-docs",
  template: `
    <iframe src="/docs/index.html"
            style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0">
      Your browser doesn't support iframes
    </iframe>`,
  standalone: true
})
export class HugoNxDocs {
  title = "dashboard";
}
