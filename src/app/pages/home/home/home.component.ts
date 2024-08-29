import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
 public number = 1
  public isActive = true

  ngOnInit(): void {
 /*  setInterval(()=> {
     this.number++
   }, 35000)*/
  }
}
