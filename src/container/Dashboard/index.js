import React, { Component } from 'react';
import { Row,Col,Container,Card ,Button } from 'react-bootstrap';
import  '../../index.scss';
 class Dashboard extends React.Component {
    constructor(){
        super()


    }

    render(){
        return(
            <>
            <div className="dashboard" >
          <i class="fas fa-bell"></i>

                <div style={{padding:'12px 0px'}}>Plans & Forecasts</div>
                <div style={{fontSize : '32px' , fontWeight:'bold',marginBottom:'28px'}}>2021 Annual Operating Plan</div>
            
            <div className="row" >
            <div className="col-sm-8">
               <div>
                   <h6>Define OEF Guidelines for next year</h6>
                   <div style={{color:'#2596be',marginBottom:'35px'}}>Open finance Tool(FDS)</div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-4">
                       <div>Total SBU Core OEF <br/>from last approved forecast</div>
                   </div>
                   <div className="col-2">
                       <div className="text-center">% Change <br/>for new plan</div>
                   </div>
                   <div className="col-3">
                       <div className="text-center" >Core OEF($)</div>
                   </div>
                   <div className="col-3">
                       <div className="text-center">Discrectionary OEF <br/>% of total fixed costs</div>
                   </div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-4">
                     
                       <div className="bold">$150.0M</div>
                   </div>
                   <div className="col-2">
                     
                       <div>
                           <input type="text" className="input-size"  />
                       </div>
                   </div>
                   <div className="col-3">
                     
                       <div>
                       <input className="input-size"  />
                       </div>
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                   </div>
               </div>
               <div style={{margin:'56px 0px'}}>Provide SBE Level breakup of OEF Target</div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-1">
                       <div>SBE</div>
                   </div>
                   <div className="col-3">
                       <div>Total SBU Core OEF <br/> from last approved forecast</div>
                   </div>
                   <div className="col-2">
                       <div className="text-center">% Change <br/> for new plan</div>
                   </div>
                   <div className="col-3">
                       <div className="text-center">Core OEF($)</div>
                      
                   </div>
                   <div className="col-3">
                       <div className="text-center">Discrectionary OEF <br/> % of total fixed costs</div>
                   </div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-1">
                       <div className="bold">SBE</div>
                   </div>
                   <div className="col-3">
                       <div className="bold">$50.0M</div>
                   </div>
                   <div className="col-2">
                       <div>
                           <input className="input-size" />
                       </div>
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                      
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                   </div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-1">
                       <div className="bold">SBE</div>
                   </div>
                   <div className="col-3">
                       <div className="bold">$50.0M</div>
                   </div>
                   <div className="col-2">
                       <div>
                           <input className="input-size" />
                       </div>
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                      
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                   </div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-1">
                       <div className="bold">SBE</div>
                   </div>
                   <div className="col-3">
                       <div className="bold">$50.0M</div>
                   </div>
                   <div className="col-2">
                       <div>
                           <input className="input-size" />
                       </div>
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                      
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                   </div>
               </div>
               <div className="row" style={{justifyContent:'space-evenly'}}>
                   <div className="col-1">
                       <div className="bold">SBE</div>
                   </div>
                   <div className="col-3">
                       <div className="bold">$50.0M</div>
                   </div>
                   <div className="col-2">
                       <div>
                           <input className="input-size" />
                       </div>
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                      
                   </div>
                   <div className="col-3">
                       <div>
                       <input className="input-size" />
                       </div>
                   </div>
               </div>
               
            </div>
            <div className="col-sm-4"  >
            <div class="card">
  <div style={{fontSize : '28px'}}>Total Core OEF for all SBUs</div>
  <span style={{fontSize : '24px'}}>From last approved plan</span>
  <div style={{fontSize :'60px',fontWeight:'bold',color:'darkgrey'}}>$ 150.0M</div>
  <span style={{fontSize : '24px'}}>In this plan</span>
  <div style={{fontSize :'60px',fontWeight:'bold'}}>$150.0M</div>
  <span style={{fontSize : '24px'}}>This new plan will be sent to</span>
  <div>
    <div><span style={{fontSize : '22px',fontWeight:'bold'}}>Person Name (SBG HRDA)</span><span style={{float:'right'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 20 20">
  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
</svg></span></div>
    <div style={{marginBottom:'25px',color:'#86b8cd'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg><span style={{paddingLeft:10}}>Add Another</span></div>
  </div>
  <span style={{fontSize : '22px'}}>Next approval due <b>Nov 10 2021</b></span>
  <span style={{fontSize : '22px'}}>I've aligned with leadership and approve  this target</span>
  <Button variant="primary" style={{margin:'20px 0px'}}>Save</Button>
</div>
            </div>
            </div>
          
            </div>
          </>
        )
    }
}

export default Dashboard