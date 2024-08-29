import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";


@Component({
  selector: 'app-ciclos-vida',
  standalone: false,
  templateUrl: './ciclos-vida.component.html',
  styleUrl: './ciclos-vida.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CiclosVidaComponent implements OnChanges, DoCheck, AfterViewInit, OnDestroy {

  public myText = signal('Eduardo')

  @Input() public myNumber = 0

  //resgata elementos html
  @ViewChild('content') public content!: ElementRef

  // private _destroy$ = timer(0, 1000).pipe(takeUntilDestroyed()).subscribe({
  //   next: (next)=> { console.log( 'next ', next) },
  //   error: (error)=>{ console.log('error', error) },
  //   complete: () => { console.log('complete') }
  // })

  constructor() {
  }

  //changes detection
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges', changes)
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterViewInit(): void {
    console.log('after view init')
    console.log(this.content.nativeElement.innerText)
  }

  ngOnDestroy(): void {
   console.log('ng on destroy')
   // this._destroy$.unsubscribe()
  }
}
