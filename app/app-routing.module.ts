import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';

 const routes: Routes = [{ path: 'home', component: HomeComponent},
{ path: 'explore', component: ExploreComponent },
{ path: 'subscription', component: SubscriptionComponent },
{ path: 'contact', component: ContactusComponent, },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
