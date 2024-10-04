import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  listOfString: string[] = ['dang thuc', 'tran thuc', 'tran dang']

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}