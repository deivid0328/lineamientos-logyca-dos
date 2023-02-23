import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material angular components

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

// Componentes

import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { RecetasComponent } from './recetas/recetas.component';
import { BackLineamientosGenComponent } from './back-lineamientos-gen/back-lineamientos-gen.component';
import { BemComponent } from './bem/bem.component';
import { ReglasUXComponent } from './reglas-ux/reglas-ux.component';
import { HomeComponent } from './home/home.component';
import { UsoAzureComponent } from './uso-azure/uso-azure.component';
import { FolderDistributionComponent } from './folder-distribution/folder-distribution.component';
import { HealthComponent } from './health/health.component';
import { DevelopMapComponent } from './develop-map/develop-map.component';
import { EnvironmentVariablesComponent } from './environment-variables/environment-variables.component';
import { AzureFunctionsComponent } from './azure-functions/azure-functions.component';
import { BuenasPracticasFrontComponent } from './buenas-practicas-front/buenas-practicas-front.component';
import { PeticionesHTTPComponent } from './peticiones-http/peticiones-http.component';
import { ApisComponent } from './apis/apis.component';
import { BuenasPracticasBackComponent } from './buenas-practicas-back/buenas-practicas-back.component';
import { ColorPaletComponent } from './color-palet/color-palet.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { BrandComponent } from './brand/brand.component';
import { LookAndFeelComponent } from './look-and-feel/look-and-feel.component';
import { MetodproyectComponent } from './metodproyect/metodproyect.component';

@NgModule({
  declarations: [
    AppComponent,
    TecnologiaComponent,
    RecetasComponent,
    BackLineamientosGenComponent,
    BemComponent,
    ReglasUXComponent,
    HomeComponent,
    UsoAzureComponent,
    FolderDistributionComponent,
    HealthComponent,
    DevelopMapComponent,
    EnvironmentVariablesComponent,
    AzureFunctionsComponent,
    BuenasPracticasFrontComponent,
    PeticionesHTTPComponent,
    ApisComponent,
    BuenasPracticasBackComponent,
    ColorPaletComponent,
    TipografiaComponent,
    BrandComponent,
    LookAndFeelComponent,
    MetodproyectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
