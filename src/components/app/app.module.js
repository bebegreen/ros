import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import dragDrop from 'angular-drag-and-drop-lists';
import ngAnimate from 'angular-animate'; 
import routes from './app.routes'
import home from '../homePage'
import dashboard from '../dashboard'
import './app.scss';

angular.module('ROS', [
  'ngAnimate',
  'dndLists',
  uirouter,
  home,
  dashboard
])
  .config(routes)
