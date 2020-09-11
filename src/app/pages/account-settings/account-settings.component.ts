import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  
  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
    this.settingsServices.chekCurrentTheme();
  }

  changeTheme( theme: string){
    this.settingsServices.changeTheme(theme);
  }


}
