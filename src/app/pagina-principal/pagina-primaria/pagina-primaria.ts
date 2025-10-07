import { Component } from '@angular/core';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import {faGlobe,faGears,faSitemap, faTableCellsColumnLock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-pagina-primaria',
  imports: [  FontAwesomeModule ],
  templateUrl: './pagina-primaria.html',
  styleUrl: './pagina-primaria.scss'
})
export class PaginaPrimaria {
 faGithub = faGithub;
 faLinkedin = faLinkedin
 faGlobe = faGlobe
  faGears = faGears
  faSitemap = faSitemap
  faTableCellsColumnLock = faTableCellsColumnLock
}
