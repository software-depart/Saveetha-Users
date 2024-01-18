import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {
  protected _storage:  Storage | null = null;
  constructor(
    protected storage: Storage
  ) {
    this.ngOnInit()
   }

  async ngOnInit() { 
    await this.storage.create();
  }

  set(key: string,value: any) {
    this.storage?.set(key, value);
  }

  get(key: string) {
    return from(this.storage.get(key))
  }

  async userInfo() {
    return await this.storage.get('userInfo') 
  }

  async getValue(key: string): Promise<any> {
    try {
      const value = await this.storage.get(key);
      if (value != null) {
        return value;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
}
