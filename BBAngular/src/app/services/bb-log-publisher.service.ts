//Adapted from this tutorial https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
import { Injectable } from '@angular/core';

import { LogPublisher, LogConsole, LogLocalStorage} from "src/app/services/bb-abs-log-publisher";

@Injectable()
export class LogPublishersService {
    constructor() {
        // Build publishers arrays
        this.buildPublishers();
    }
    
    // Public properties
    publishers: LogPublisher[] = [];
    
    // Build publishers array
    buildPublishers(): void {
        // Create instance of LogConsole Class
        this.publishers.push(new LogConsole());

        // Create instance of `LogLocalStorage` Class
    this.publishers.push(new LogLocalStorage());
    }
}