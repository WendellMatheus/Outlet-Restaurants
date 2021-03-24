import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {
  static handlerError(error: Response | any){
    let errorMenssge: string
    if(error instanceof Response){
      errorMenssge = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    }else{
      errorMenssge = error.toString()
    }
    console.log(errorMenssge)
    return Observable.throw(errorMenssge)


  }
}
