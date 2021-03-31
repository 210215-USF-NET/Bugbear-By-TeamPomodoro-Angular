//Adapted from this tutorial https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/bb-logging.service'

@Component({
  selector: 'app-bblogger',
  templateUrl: './bblogger.component.html',
  styleUrls: ['./bblogger.component.css']
})
export class BbloggerComponent implements OnInit {

  constructor(private logger: LogService) {
  }

  testLog(): void {
    this.logger.log("Test the `log()` Method");
    this.logger.log("Test 2 Parameters", "Paul", "Smith");
    this.logger.debug("Test Mixed Parameters", true, false, "Paul", "Smith");
    
    let values = ["1", "Paul", "Smith"];
    this.logger.warn("Test String and Array", "Some log entry", values);
  }

  ngOnInit(): void {
  }
}

