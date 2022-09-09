import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @belongsTo('scientist') scientist: any;

  @attr('string') _id: any;
  @attr('string') commentText: any;
  @attr('date') date: any;
}
