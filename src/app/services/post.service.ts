import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsSubject = new Subject<any[]>();

  posts : Array<object> = [
    {title: 'First post',
// tslint:disable-next-line: max-line-length
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet commodo ex. Nam vitae consectetur lectus. Nulla sit amet dignissim eros. Nam ut tellus vitae ligula pellentesque vestibulum ut at dui. Donec at condimentum ex, ut fringilla mauris. Sed gravida eget ipsum eget malesuada. Maecenas malesuada magna at ipsum iaculis, a laoreet erat lobortis. Nam placerat tincidunt ex, a eleifend lectus luctus id. Vivamus et tellus diam. Ut sem orci, rhoncus sit amet mi at, pretium ultrices metus. Morbi lobortis nibh urna, nec ultrices metus maximus sed. Vestibulum rutrum placerat lobortis. In ut fringilla diam.',
    loveIt: '0',
    created_at: '6/8/2019' ,
    },
    {title: 'Second post',
// tslint:disable-next-line: max-line-length
    content: 'Vestibulum in elit velit. Fusce vel ante ut orci ullamcorper aliquet vel a nibh. Aenean vel rutrum ipsum. Aliquam eget massa maximus, viverra nunc in, sagittis orci. Suspendisse potenti. Vivamus congue fermentum fermentum. Phasellus viverra cursus pharetra. In vel dui egestas, tristique est in, lacinia odio.',
    loveIt: '0',
    created_at: '6/8/2019',
    },
    {title: 'Third post',
// tslint:disable-next-line: max-line-length
    content: 'Etiam diam urna, vestibulum nec interdum eget, hendrerit vitae libero. Integer vitae enim vel erat facilisis cursus eget aliquam eros. Nulla ornare eu ex quis imperdiet. Donec fermentum volutpat pretium. Donec blandit semper nulla id commodo. Aenean elementum viverra turpis, bibendum laoreet nulla. Suspendisse potenti. Praesent quis metus nisl. Donec dui ante, auctor a dui vel, vehicula porta ligula. Aliquam vulputate leo velit, eu tempus justo lobortis eu. ',
    loveIt: '0',
    created_at: '6/8/2019',
    },
  ];

  emitPostSubject(){
    this.postsSubject.next(this.posts.slice());
  }

  doNotLovePost(post: Post) {
    post.loveIt--;
  }

  lovePost(post: Post) {
    post.loveIt++;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1);
    this.emitPostSubject();
  }
}
