import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle', {static: false})
  appTitleElem: ElementRef;

  title = 'Shop app';

  ngAfterViewInit(): void {
    console.log('After view init called');
    this.appTitleElem.nativeElement.innerHTML = this.title;
  }
}
