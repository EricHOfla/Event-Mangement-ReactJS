import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import Register from '../pages/login/Register';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/login/login';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/event', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> },
  { path: '/login', element: <Login/> },
  { path: '/register', element: <Register /> },
  { path: '/contact', element: <Contact /> },
  { path: '/*', element: <h1>page not found</h1> }
]

