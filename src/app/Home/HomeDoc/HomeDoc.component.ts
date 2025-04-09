import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FeaturesComponent } from "./Components/features/features.component";
import { StatsComponent } from "./Components/stats/stats.component";
import { LogoComponent } from "./Components/logo/logo.component";
import { BentoComponent } from "./Components/bento/bento.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-home-doc',
  imports: [
    HeaderComponent,
    FeaturesComponent,
    StatsComponent,
    LogoComponent,
    BentoComponent,
    FooterComponent
],
  templateUrl: `./HomeDoc.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDocComponent { }
