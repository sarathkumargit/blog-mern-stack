
import React from 'react'
import PostList from './pages/PostList';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import PostDetails from './pages/PostDetails';
import Header from './components/Header';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
   
      <Router>
         <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        
        </Routes>
        <Footer />
      </Router>
      
    </div>

  )
}

export default App

