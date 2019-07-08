import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { PopupComponent } from './popup/popup.component';
import { RedirectComponent } from './redirect/redirect.component';
const routes: Routes = [
    { path: 'background', component: BackgroundComponent },
      { path: 'popup', component: PopupComponent },
      { path: 'redirect', component: RedirectComponent },
      { path: '', redirectTo: 'popup', pathMatch: 'full' }
  ];
@NgModule({
      imports: [RouterModule.forRoot(routes, { useHash: true })],
      exports: [RouterModule]
  })
  export class AppRoutingModule { }
