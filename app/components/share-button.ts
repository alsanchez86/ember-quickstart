import Component from '@glimmer/component';
import { service } from '@ember/service';
import { TWEET_INTENT } from 'ember-quickstart/constants';

interface ShareButtonComponentArgs {
  text: string;
  hashtags: string;
  via: string;
}

export default class ShareButtonComponent extends Component<ShareButtonComponentArgs> {
  @service router: any;

  get currentURL() {
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL.href);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
