import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { StudentsComponent } from './students/students.component';
import { VideosComponent } from './videos/videos.component';
import { ProgramComponent } from './program/program.component';


// If the Route says /contact then that page needs to be loaded.

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'tasklist', component: TasklistComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'videos', component: VideosComponent },
    {path: 'program', component: ProgramComponent}
];
