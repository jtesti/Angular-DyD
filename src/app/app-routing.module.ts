import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from './total/chapters/chapters.component';
import { CharactersComponent } from './total/characters/characters.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'season', component: ChaptersComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
