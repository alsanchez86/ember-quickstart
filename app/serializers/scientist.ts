import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';

export default class ScientistSerializer extends JSONAPISerializer {
  // primaryKey = '_id';

  keyForAttribute(key: string) {
    return camelize(key);
  }

  normalizeResponse(
    store: any,
    primaryModelClass: any,
    payload: any,
    id: any,
    requestType: any
  ) {
    const data = payload.data.map((scientist: any) => ({
      id: scientist._id,
      type: scientist.type,
      attributes: {
        firstName: scientist.firstName,
        lastName: scientist.lastName,
        subject: scientist.subject,
        comments: scientist.comments,
        subjects: scientist.subjects,
      },
    }));

    const payloadOutput = {
      data,
    };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payloadOutput,
      id,
      requestType
    );
  }
}
