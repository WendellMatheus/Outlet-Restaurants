import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';

import { NotificationService } from './messages/notification.service'
import { LoginService } from '../security/login/login.service';

import { LoggedInGuard } from '../security/loggedin.guard';
import { LeaveOrderGuard} from '../order/leave-order.guard'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,SnackbarComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard]
    }
  }
}
