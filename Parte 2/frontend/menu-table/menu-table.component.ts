import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/member.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  menu = [
    {
      ID: 1,
      Nombre: "Carbonada",
      Tipo: "menestra",
      Fecha_Creacion: "2019-09-14",
      Fecha_Modificacion: "2020-08-15",

    },

    {
      ID: 2,
      Nombre: "Bife Angosto",
      Tipo: "Parrilla",
      Fecha_Creacion: "2019-07-14",
      Fecha_Modificacion: "2020-09-15",

    }

  ]
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) =>{
      this.menu = data;

    })
  }

}
