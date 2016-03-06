class Controller {

    constructor(myService) {
        this.message = myService.echo('The controller says HI!');
    }

}

Controller.$inject = ['myService'];

export default Controller;