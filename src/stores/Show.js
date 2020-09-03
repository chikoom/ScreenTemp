import { observable, action, computed } from 'mobx'

export class Show{
    @observable startTime 
    @observable endTime 
    @observable creatorID 
    @computed roomLength 

    @action updateShow(){
        
    }

}