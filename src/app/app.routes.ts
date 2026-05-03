import { Routes } from '@angular/router';
import { HomePage } from './pages/home/components/home-page/home-page';
import { ContactPage } from './pages/contact/components/contact-page/contact-page';
import { WorkPage } from './pages/work/components/work-page/work-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home Page',
  },
  {
    path: 'work',
    component: WorkPage,
    title: 'My Work',
  },
  {
    path: 'contact',
    component: ContactPage,
    title: 'Contact Me',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
