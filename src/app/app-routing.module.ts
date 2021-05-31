import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllHotelsComponent } from './all-hotels/all-hotels.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
