{
    function Person ( name, surname, birthday){
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;

        Object.defineProperty(this, "age", {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        });

        Object.defineProperty(this, 'toString', {
            get : function () {
                return `${this.name} ${this.surname} ${this.age}`;
            }
        });
    }

    let user = new Person('John', 'Joo',new Date(1992, 6, 1) );
    alert( user.toString );
}

