import { Pipe, PipeTransform, Renderer2, ElementRef } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  transform(value: string, args: string): void {
    if (args && value) {
      value = String(value);
      const startIndex = value.toLowerCase().indexOf(args.toLowerCase());

      if (startIndex !== -1) {
        const matchString = value.substr(startIndex, args.length);
        const highlightedString = `<span style='color:#3380c6'>${matchString}</span>`;

        const span = this.renderer.createElement('span');
        this.renderer.setProperty(span, 'innerHTML', value.replace(matchString, highlightedString));

        const parent = this.el.nativeElement.parentNode;
        this.renderer.insertBefore(parent, span, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
      }
    }
  }
}
