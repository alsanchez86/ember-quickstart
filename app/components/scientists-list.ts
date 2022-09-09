import Component from '@glimmer/component';
import { action } from '@ember/object';
import ScientistModel from 'ember-quickstart/models/scientist';

interface ScientistsListArgs {
  title: string;
  scientists: ScientistModel[];
}

export default class ScientistsList extends Component<ScientistsListArgs> {
  @action
  showScientist(scientist: ScientistModel) {
    // TODO: aquí se mostrará un modal con la información del científico dentro
  }
}
