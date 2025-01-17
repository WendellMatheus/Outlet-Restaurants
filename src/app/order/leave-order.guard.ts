import { OrderComponent } from './order.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{

  canDeactivate(orderComponent: OrderComponent,
                activatedRoute: ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean {
      if(!orderComponent.isOrderCompleted()){
      return window.confirm('Deseja desisitir da compra?')
      }else{
        return true
      }
    }

}
