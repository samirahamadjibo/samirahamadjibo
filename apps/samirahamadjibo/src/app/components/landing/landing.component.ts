/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'digitalvitae-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToProjects(){
    this.router.navigate(['/home'], { fragment: "projects" });
  }
  navigateToExperiences(){
    this.router.navigate(['/home'], { fragment: "experiences" });
  }
  navigateToContact(){
    this.router.navigate(['/home'], { fragment: "contact" });
  }
}
