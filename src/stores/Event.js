import { observable, action, computed } from 'mobx'
import {Show} from './Show'

const show = new Show()
export class Event {
    @observable name 
    @observable description
    @observable imgUrl 
    @observable videoUrl 
    @observable coverImgUrl 
    @observable creatorID
    @observable show = []
    @observable comments = []
    @observable rating
    constructor(name , description ,imgUrl ,videoUrl , coverImgUrl , creatorID) {
        this.name = name
        this.description = description
        this.imgUrl = imgUrl
        this.videoUrl = videoUrl
        this.coverImgUrl = coverImgUrl
        this.creatorID = creatorID

    }
    @action getEvent(){
        
    }
    @action setEvent(){

    }
    @action addShow(id){

    }
    @action removeShow(id){

    }
}


