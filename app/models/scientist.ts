import Model, { attr, hasMany } from '@ember-data/model';

export default class ScientistModel extends Model {
  @attr('string') firstName: any;
  @attr('string') lastName: any;
  @attr('string') subject: any;
  @hasMany('comment') comments: any;
  @hasMany('string') subjects: any;
}
