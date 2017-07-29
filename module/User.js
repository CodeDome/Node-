function User(id,name,age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.name+'静茹图书馆');
    }
}
module.exports = User;