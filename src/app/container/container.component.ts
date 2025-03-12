import { Component } from '@angular/core';
import { MainNavComponent } from "../main-nav/main-nav.component";
import { HeroComponent } from "../hero/hero.component";
import { ServiceComponent } from '../service/service.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';
import { PricingsComponent } from '../pricings/pricings.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MainNavComponent, HeroComponent, ServiceComponent, AboutComponent, FeaturesComponent, PricingsComponent, FaqsComponent, CtaComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
