import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

import{ Routes, RouterModule} from '@angular/router';

const routes:Routes = [
  { path : 'cadastro-clientes', component : CadastroClientesComponent },
  { path : 'consulta-clientes', component : ConsultaClientesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
