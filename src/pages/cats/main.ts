import {Component, Input} from '@angular/core';
import { GetService } from '../../app/services/get.service'

interface IData {
  url: string
}

@Component({
  selector: 'main',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class CatsComponent {
  @Input() data: IData[] = []
  constructor(private service:GetService) {}

  ngOnInit() {
    this.service.getCat()
      .subscribe((response: any) => {
        this.data = response
      });
  }
}
