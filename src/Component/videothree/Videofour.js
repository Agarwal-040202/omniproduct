import React from 'react'
import Table from 'react-bootstrap/Table';

const Videofour = () => {
  return (
    <div style={{
        // maxHeight: 'calc(100vh - 130px)',
        // overflowY: 'hidden',
        // overflowX:'hidden',
        // borderTop: "1px solid black",
        height:'80vh',
        marginBottom:"10px",
        marginTop:"10px"
    }}>
            <div className="">
                {/* <div class="video-container"> */}
                    <video muted autoPlay loop className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                        <source src="/videodata/CskPhillips.mp4" />
                    </video>
                    {/* <div className="controls">
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                    </div> */}
                {/* </div> */}

            </div>

            {/* <div 
            style={{
                maxHeight: 'calc(100vh - 490px)',
                overflowY: 'auto',
                border: "1px solid black",
                
            }}
                className="m-0 p-0"
            > */}
             <div 
           
           className="m-0 p-0 table-main-div heughtset"
           // style={{height:"70vh !important"}}
           
       >

                <Table bordered className='m-0 p-0'>

                    <thead className='bg-light'  style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>Rs. 100 NOS</th>
                            
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>59</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>64</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>68</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>80</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>60</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>64</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>67</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>75</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>82</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>86</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>140</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>159</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>78</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>86</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>98</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>155</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>69</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>75</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>81</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>92</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>99</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>138</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>157</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>196</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>249</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>280</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>450</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>610</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>140</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>161</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>196</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>211</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>128</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>135</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>140</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>152</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>179</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>216</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>233</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>248</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>295</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>317</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>447</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>618</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>846</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>238</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>258</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>289</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>191</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>214</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>236</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>255</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>296</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>304</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>339</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>385</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>435</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>713</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1178</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1452</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2675</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3591</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>321</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>359</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>397</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>439</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>515</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>787</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1273</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1910</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2865</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3781</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1510</td>
                    </tr>

                    

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2205</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3045</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3850</td>
                    </tr>

                   

                </Table>


            </div>
           
        </div>
  )
}

export default Videofour