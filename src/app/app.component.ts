import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStyles: Record<string, string> = {}
  isShowingSubmitForm: Record<string, string> = {}
  isShowingSentMessage: Record<string, string> = {}
  showText: Record<string, string> = {}
  hideSeeMore: Record<string, string> = {}
  showAwser: Record<string, string> = {}

  expandText() {
    this.showText = {
      'height': 'auto'
    }
    this.hideSeeMore = {
      'display': 'none'
    }
  }

  createTopic() {
    this.currentStyles = {
      'display': 'none'
    }
    this.isShowingSubmitForm = {
      'display': 'flex'
    }
  }
  submitTopic() {
    this.isShowingSubmitForm = {
      'display': 'none'
    }  
    this.isShowingSentMessage = {
      'display': 'flex'
    }
  }
  createAnotherTopic() {
    this.isShowingSentMessage = {
      'display': 'none'
    }
    this.isShowingSubmitForm = {
      'display': 'flex'
    }
  }
  seeAwser() {
    this.showAwser = {
      'display': 'flex'
    }    
  }
  title = 'DevChuva';
}
