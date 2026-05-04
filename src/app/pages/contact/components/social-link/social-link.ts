import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.html',
})
export class SocialLink {
  icon = input.required<string>();
  name = input.required<string>();
  href = input.required<string>();
}
