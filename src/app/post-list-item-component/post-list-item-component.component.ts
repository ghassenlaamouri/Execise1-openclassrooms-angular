import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() Post: any;



  constructor() { }

  ngOnInit() {
  }
  increaseLove() {
    this.Post.loveIts++;
  }
  decreaseLove() {
    this.Post.loveIts--;
  }

  getColor() {
    if (this.Post.lovelts > 0) {
      return 'green';
    } else if (this.Post.lovelts < 0) {
      return 'red';

    }

  }
}
