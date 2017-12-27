[{
    id:'/#12poeowrij',
    name:'Andrew',
    room:'Office'
}]

//
// var users = [];
//
// var addUser = (id,name,room) => {
//     users.push({});
// };
//
// modules.exports = {addUser};

class Users {
    constructor () {
        this.users = [];
    }

    addUsers (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id){
        var user = this.getUser(id);

        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser (id){
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList (room){
        var user = this.users.filter((user) => user.room === room);
        var namesArray = user.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
