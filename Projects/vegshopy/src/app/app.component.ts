import { LocalResolver } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { VegetableListService } from './vegetable-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vegShopeey';
  public amount  = 0;
  public vegetableLists:any;
  public navbarList =[
    {"name" : "Vegetable", "message":"Vegetable", url: "/assets/Data/vegetableList.json"},
    {"name" : "Fruit", "message":"Fruit", url:"/assets/Data/fruitList.json"},
    {"name" : "Bread", "message":"Bread", url:"/assets/Data/breadList.json"},
    {"name" : "Dry Fruit", "message" :"DryFruit", url:"/assets/Data/dryFruit.json"}
  ];

  activeTab(tab:any){
    // for(i=0; i<this.navbarList.length;i++)
      this.vegServes.getItems(tab?.url)
      .subscribe((response: any) =>{
      this.vegetableLists =response;
    })
  }

  setAmount(value:number){
    this.amount = value + this.amount;
    localStorage.setItem('amount', this.amount.toString());
    const testValue = localStorage.getItem('amount');
  }

  constructor(private vegServes:VegetableListService){}

  ngOnInit(): void {
    // this.vegServes.getVegetable()
    // .subscribe((response) =>{
    //     this.vegetableLists = response;
    // })
    
  }
}

