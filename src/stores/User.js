import { observable, action, computed } from 'mobx'



export class User{
    @observable userID 
    @observable firstName 
    @observable lastName 
    @observable imgUrl
    @observable memberSince
    @observable incomingShows =[]
    @observable pastShows =[]
    constructor(userID , firstName ,lastName ,imgUrl ,memberSince) {
        this.userID = userID
        this.firstName = firstName
        this.lastName = lastName
        this.imgUrl = imgUrl
        this.memberSince = memberSince
    }
    @action addUser(){

    }
    @action removeUser(id){

    }
    @action updateUser(id){

    }
    @action bookShow(id){
        
    }
    @action cancelShow(id){

    }


}