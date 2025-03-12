import { Component, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent implements AfterViewInit, OnDestroy {
  title: string = "SCEO";
  private scrollListener!: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const header = this.el.nativeElement.querySelector('[data-header]');
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      if (window.scrollY >= 10) {
        this.renderer.addClass(header, 'active');
      } else {
        this.renderer.removeClass(header, 'active');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      this.scrollListener(); 
    }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-main-nav',
//   standalone: true,
//   imports: [],
//   templateUrl: './main-nav.component.html',
//   styleUrl: './main-nav.component.scss'
// })
// export class MainNavComponent {
//   title: string = "blogger";
// }
