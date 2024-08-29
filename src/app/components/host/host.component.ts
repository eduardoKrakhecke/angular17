import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  standalone: false,
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class' ,
    '(document:keypress)': 'updateHostListener($event)',
    '(click)': 'updateClick()'
  }
})
export class HostComponent {

  //versões antigas
  //@HostBinding('attr.class') public class = 'Dudu'
  public class = 'Eduardo'

  //HostListener('document:keypress', ['$event'])
  public updateHostListener(event: KeyboardEvent) {
    console.log(event)
  }

  public updateClick(){
    console.log('Eduardo')
  }

}
