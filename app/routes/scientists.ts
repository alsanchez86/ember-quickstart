import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ScientistsRoute extends Route {
  @service store: any;
  async model() {
    return this.store.findAll('scientist');
  }
}

/* 
TODO:

1. Los datos del modelo vendrán de un JSON de científicos (se hará una petición para obtener el json) -> OK
2. Cuando se clique en el nombre de un científico, mostrar sus otros datos en un modal (en otro componente diferente)
3. Cuando se clique en otro botón que haya dentro del modal, se cerrará el modal y se hará una petición a un endpoint externo
4. Hacer que sea posible mediante un input actualizar los datos de los rentals (sus atributos) y que se queden persistidos de forma que sean visibles desde otras rutas.
5. Mostrar en la ruta de scientists los datos de los rentals (aunque sea los ids) sin necesidad de hacer una nueva petición

*/
