import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Subscriber } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  constructor(
    //public subscription: Subscriber
  ) { }

  ngOnInit(): void {
    setInterval(
      () => {
        this.getTimeDifference(), 1000
        this.getWidth()
      }
    )
    
    setTimeout(() => {
     
    }, 1000)

  }

  getWidth() {    
    let div = document.querySelector<HTMLElement>('.timerTitulo')!;
    let texto = document.querySelector<HTMLElement>('.contagem')!;
    if (div.clientWidth > 450) {
      texto.style.fontSize = '3.5rem';
    } else texto.style.fontSize = '1 rem';

  }

  public dateNow = new Date();
  public dDay = new Date('Sep 17 2022 21:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any
  public secondsToDday: any
  public minutesToDday: any
  public hoursToDday: any
  public daysToDday: any


  getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

}
