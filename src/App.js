import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Student from './pages/Student';
import Admin from './pages/Admin';
export default function App(){ return (<div style={{fontFamily:'Arial',padding:20}}>
<header style={{background:'#0a60ff',color:'#fff',padding:12,borderRadius:8}}>
<h1>God's Will Private Secondary School</h1><div style={{fontStyle:'italic'}}>Leaders of Tomorrow</div>
<nav style={{marginTop:8}}><Link style={{color:'#fff',marginRight:12}} to='/'>Home</Link><Link style={{color:'#fff',marginRight:12}} to='/student'>Student</Link><Link style={{color:'#fff'}} to='/admin'>Management</Link></nav>
</header>
<main style={{marginTop:20}}><Routes><Route path='/' element={<Home/>}/><Route path='/student/*' element={<Student/>}/><Route path='/admin/*' element={<Admin/>}/></Routes></main>
</div>); }