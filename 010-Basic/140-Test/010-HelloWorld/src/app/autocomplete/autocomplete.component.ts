import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  selectedValue = "123";

  itemList = [
    {
      desc: "Label 1",
      disabled: true
    }, 
    {
      desc: "Label 2"
    }, 
    {
      desc: "Label 3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectItem(selectedItem){
    if (!selectedItem.disabled){
      this.selectedValue = selectedItem.desc;
    }
  }
}
