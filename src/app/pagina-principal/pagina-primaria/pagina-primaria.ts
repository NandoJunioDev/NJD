import { Component } from '@angular/core';
import { faGithub, faLinkedin, faJava, faAngular,faGitAlt } from '@fortawesome/free-brands-svg-icons'
import {faGlobe,faGears,faSitemap, faTableCellsColumnLock,faBrain} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-pagina-primaria',
  imports: [  FontAwesomeModule, MatCardModule ],
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
  faBrain = faBrain
  faJava = faJava
  faAngular = faAngular
  faGitAlt = faGitAlt
}
