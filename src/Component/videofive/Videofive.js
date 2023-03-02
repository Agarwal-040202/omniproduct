import React from 'react'
import Table from 'react-bootstrap/Table';

const Videofive = () => {
  return (
    <div style={{
        // maxHeight: 'calc(100vh - 130px)',
        height:"80vh",
        // overflowY: 'hidden',
        // borderTop: "1px solid black",
        marginBottom:"10px",
        marginTop:"10px"
    }}
    
    >
    <div className="">
        {/* <div class="video-container w-100"> */}
            <video muted autoPlay loop className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                <source src="/videodata/PanPhillips.mp4" />
            </video>
            {/* <div className="controls">
                <span className="control-btn" data-src=""></span>
                <span className="control-btn" data-src=""></span>
                <span className="control-btn" data-src=""></span>
            </div> */}
        {/* </div> */}

    </div>

    {/* <div style={{
                maxHeight: 'calc(100vh - 185px)',
                overflowY: 'auto',
                borderTop: "1px solid black",
                
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
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>Rs. 100 NOS</th>
                            
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>64</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>70</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>75</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>88</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>64</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>70</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>74</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>82</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>87</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>94</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>154</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>175</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>83</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>95</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>109</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>129</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>76</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>81</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>90</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>99</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>110</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>144</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>168</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>221</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>276</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>308</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>490</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>667</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>154</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>180</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>228</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>233</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>138</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>149</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>167</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>175</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>205</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>248</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>264</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>280</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>320</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>342</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>491</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>674</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>922</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>260</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>283</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>317</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>218</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>234</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>259</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>282</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>312</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>333</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>367</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>435</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>489</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>949</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1296</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1596</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2942</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3941</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>344</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>367</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>425</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>485</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>565</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1047</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1401</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2101</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3151</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>4160</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1661</td>
                    </tr>

                    

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2425</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3349</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>4235</td>
                    </tr>

                   

                </Table>


            </div>
   
</div>
  )
}

export default Videofive