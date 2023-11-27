import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent {
  @Input() repo : any = {
    name : '',
    description : '',
    topics : []
  };
  onNgInit()
  {
    console.log(this.repo.name)
    console.log(this.repo.description)
    console.log(this.repo.topics)

  }
  getTopics(repo : any)
  {
    if(repo.topics.length > 3)
    {
      return this.repo.topics.slice(0, 3).concat(this.repo.topics[3]+' + ' + (this.repo.topics.length - 3));

    }
    else return this.repo.topics;
  }


}
