import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule, UrlSegment } from '@angular/router';
import { MenuService } from '../../service/menu.service';
import { ShellService } from '../../service/shell.service';
import { Shell } from '../../model/shell.model'

@Component({
  selector: 'dm-breadcrumb',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  public pageTitle!: string;
  public breadcrumbs: {
    name: string;
    url: string
  }[] = [];
  public shell: Shell;

  constructor(public shellService: ShellService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public title: Title,
              private menuService: MenuService) {
    this.shell = this.shellService.shell;
  }

  ngOnInit() {
    this.breadcrumbs = [];
    this.parseRoute(this.router.routerState.snapshot.root);
    this.pageTitle = "";
    this.breadcrumbs.forEach(breadcrumb => {
      this.pageTitle += ' > ' + breadcrumb.name;
    })
    this.title.setTitle(this.shell.name + this.pageTitle);
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
          return urlSegment.path;
        }).join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        })
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

  public closeSubMenus() {
    if (this.shell.menu == "vertical")
      this.menuService.closeAllSubMenus();
  }

}
