import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestComponent } from '../../shared/components/Test.component';
import { Test2Component } from '../../shared/components/test2/test2.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TestComponent, Test2Component],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mutation-observer';
}
