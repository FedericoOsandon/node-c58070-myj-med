// persistencia/model
class MessageDaoMongo {
    getMessages(){
        return 'get Messages'
    }
    getByMessages(obj){
        return 'get By Messages'
    }
    createMessages(){
        return 'create Messages'
    }
    updateMessages(mid){
        return 'update Messages'
    }
    deleteMessages(mid){
        return 'delete Messages'
    }
}

module.exports = MessageDaoMongo