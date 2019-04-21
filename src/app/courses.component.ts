import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <div id="courses"> "#courses"
    template: `
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    
    `
})
export class CoursesComponent {
    title = "Title comes here";
    courses;
    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
        console.log(CoursesService);
    }
}