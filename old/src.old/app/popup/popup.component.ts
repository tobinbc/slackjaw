import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.port.disconnect()
    this.port = undefined
  }
  slack: string = ''


  port: chrome.runtime.Port

  constructor() { }

  ngOnInit() {
    this.connectWithContentScript();
    chrome.storage && chrome.storage.local.get(items => this.slack = items.slack || '')
  }
  save = () => {
    chrome.storage && chrome.storage.local.set({
      slack: this.slack
    })
  }
  sendRequest = () => {
    chrome.tabs.create({ url: "https://slack.com/oauth/authorize?client_id=655447184916.649599483553&scope=incoming-webhook,chat:write:bot,commands,users:read,team:read,bot&state=abc123" }, function (tab) {


    });
  }
  sendMessage = message => {
    if (this.port) {
      this.port.postMessage({});
    }
  }

  connectWithContentScript = () => {
    if (chrome && chrome.tabs) {
      const tabQueryData = { active: true, currentWindow: true };
      chrome.tabs.query(tabQueryData, (tabs) => {
        this.port = chrome.tabs.connect(tabs[0].id);

        this.port.onMessage.addListener(message => {
          console.log('popup received message', message)
        });
      });
    } else {
      console.log('Opening in browser')
    }

  }



}
