import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-pages',
    template: ` <div class="header">
                    <div class="profile">
                    <app-user-profile></app-user-profile>
                </div>
                </div>
                <div class="page-layout">
                    
                       <app-sidebar></app-sidebar>
                   
                    <div class="w-100">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                `,
    styleUrls: ['../styles/page.scss']
})
export class PagesComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
