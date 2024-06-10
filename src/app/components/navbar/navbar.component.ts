import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  public option: string = 'home';
  stateScroll  = false;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      
  }

  selectOption(option: string){
    this.option = option;
  }

  @HostListener('document:scroll')
  
  scrollFunction(){
    if(document.documentElement.scrollTop > 10){
      this.stateScroll = true
    }else{
      this.stateScroll = false
    }
  }
}
