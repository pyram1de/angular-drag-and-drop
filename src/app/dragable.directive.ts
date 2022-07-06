import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDraggable]',
})
export class Draggable {
  @Input() appDraggable = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.draggable = true;
  }

  @HostListener('dragstart', ['$event'])
  dragStartHanler(ev: any) {
    ev.dataTransfer.setData('text/number', this.appDraggable);
    const html = this.el.nativeElement.innerHTML;
    ev.dataTransfer.setData('text/html', html);
    ev.dataTransfer.dropEffect = 'move';
  }
}
