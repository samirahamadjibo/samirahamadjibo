import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
