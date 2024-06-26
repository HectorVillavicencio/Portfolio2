import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLinkActive, CommonModule, ProjectsComponent, SkillsComponent, ContactComponent]
})
export default class HomeComponent {

}
