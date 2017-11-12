import angular from 'angular'; 
import uirouter from '@uirouter/angularjs'; 
import './homePage.scss'; 

import routes from './homePage.routes';

export default angular.module('ROS.home', [uirouter])
  .config(routes)
  .name

 