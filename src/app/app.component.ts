import { Component } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'DebyDwiP-TI2A';
  alamat = 'Perum Bunga Desember 12';

  tanggal = Date.now();

  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit(){
    this.hby = this.tableServ.getDeby();
  }
}
