import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName:String="Rafael Tenesaca";
  theme:String="#51fc7d";
  widthMenu:number=25;
  visibleMenu:boolean=true;
  /* El nombre del usuario debe aparecer en el menú lateral.
El menú debe ser visible u ocultarse correctamente.
El color de fondo del menú debe cambiar al hacer clic en los botones correspondientes.
El tamaño del menú debe ajustarse.*/

  alternateVisibilityMenu()
  {
    this.visibleMenu=!this.visibleMenu;
  }
  setTogglecolor(color:string):void
  {
    if (this.theme === '#51fc7d') {
      this.theme = '#80e8e0'; 
    } else {
      this.theme = '#51fc7d';
    }
  }
  setSize():void
  {
    this.widthMenu+=10;
    if(this.widthMenu>100)
    {
      this.widthMenu=25;
    }
  }
}
