import { Controller, Get } from '@nestjs/common';

@Controller('/app') 
export class AppController {
    @Get('/greeting')
    getRootRoute() {
        return "Hello world!";
    }

    @Get('/goodbye')
    getGoodbyeRoute() {
        return "Goodbye!";
    }
};
