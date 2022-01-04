class Father {
    constructor(firstName) {

        this.firstName = firstName
    }

    say() {
        console.log('Father say....')
    }
}


class Son extends Father {
    constructor(firstName, age) {
        super(firstName)
        this.age = age
    }

    run() {
        console.log('Son run ...')
    }
}

export {
    Father,
    Son
}
