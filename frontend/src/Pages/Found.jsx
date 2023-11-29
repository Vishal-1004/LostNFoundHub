import React from "react";
import Card from "../Components/Card";

const Found = () => {
  return (
    <>
            <div className='container'>
                <div className='row g-3'>
                  <h2 className="text-center">Found Items Archive</h2>
                            <Card
                              title='Lost Earbuds'
                              description='I lost my Boat Earphones in AB2-404 on Wednesday, please help me find it.' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image1.jpg"
                              index = {1}
                              />
                              <Card 
                              title='Scientific Calculator lost'
                              description='I lost my calculator in AB-1. If found contact me' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image2.jpg"
                              index={2}
                              />
                              <Card 
                              title='OnePlus Charger Missing'
                              description='Found in AB1 408 OnePlus 80W charger' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image3.jpg"
                              index={3}
                              />
                              <Card 
                              title='Laptop Sleeve (Gaming Laptop) lost'
                              description='I lost this laptop sleeve in AB1 today
                              If found, Pls contact me i need it as soon as possible, thanks ' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image4.jpg"
                              index={4}
                              />                              
                              <Card 
                              title='Boult Airpods in AB2-407'
                              description='Found these earpods in AB2-407. Owner contact me asap ' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image5.jpg"
                              index={5}
                              />
                              <Card
                              title='Pendrive missing on Tue'
                              description='I have Lost my Pendrive Huawei on Monday in Ab1-311.    If anyone find this please contact 6380954520' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image6.jpg"
                              index={6}
                              />
                             <Card 
                              title='Steel bottle and Umbrella Missing'
                              description='Near aavin circle around 2pm missing' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image7.jpg"
                              index={7}
                              />             
                              <Card 
                              title='Contact me if Earpods found any where'
                              description='I lost it in Delta block last tuesday' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image8.jpg"
                              index={8}
                              />
                              <Card 
                              title='Jack and Jones cap missing'
                              description='Cap lost in ab1 or ab1 lawn, if found please contact me thanks!' 
                              date='22/11/2023'
                              name='Surya M.U'
                              email='surya.mu2021@vitstudent.ac.in'
                              register='21BCE1903'
                              img = "../images/Lost_Image9.jpg"
                              index={9}
                              />                                               
                  </div>
             </div>
             <nav className="mt-5"aria-label="Page navigation">
                          <ul className="pagination pagination-md justify-content-center">
                            <li className="page-item active py-2"><a class="page-link" href="/">1</a></li>
                            <li className="page-item py-2"><a class="page-link" href="/">2</a></li>
                            <li className="page-item py-2"><a class="page-link" href="/">3</a></li>
                            <li className="page-item py-2"><a class="page-link" href="/">4</a></li>
                            <li className="page-item py-2"><a class="page-link" href="/">5</a></li>
                            <li className="page-item py-2"><a class="page-link" href="/">6</a></li>
                          </ul>
                </nav>
      </>
  ); 
};


export default Found;
