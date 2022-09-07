import Component from '@glimmer/component';
import { TWEET_INTENT } from 'ember-quickstart/constants';

interface ShareButtonComponentArgs {
  readonly text: string;
  readonly hashtags: string;
  readonly via: string;
}

export default class ShareButtonComponent extends Component<ShareButtonComponentArgs> {
  get currentURL() {
    return window.location.href;
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

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
