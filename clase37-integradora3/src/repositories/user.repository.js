class UserRepository {
    constructor(dao){
        this.dao = dao
    }

    async getUsers(){
        return await this.dao.get()
    }
    async getUser(filter){
        return await this.dao.getBy(filter)
    }
    async createUser(newUser){
        return await this.dao(newUser)
    }
    async updateUser(uid){}
    async deleteUser(uid){}
}

module.exports = UserRepository