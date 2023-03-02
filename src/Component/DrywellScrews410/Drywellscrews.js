import React from 'react'
import Table from 'react-bootstrap/Table';


const Drywellscrews = () => {
  return (
    <div style={{
        // maxHeight: 'calc(100vh - 130px)',
        // overflowY: 'hidden',
        // overflowX:'hidden',
        height:"80vh",
        // borderTop: "1px solid black",
        marginBottom:"10px",
        marginTop:"10px"
    }}>
            <div style={{height:"30vh !important"}}>
                {/* <div className="video-container "> */}
                    <video muted autoPlay loop className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                        <source src="/videodata/DrywellScrews410.mp4" />
                    </video>
                    {/* <div className="controls">
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                    </div> */}
                {/* </div> */}

            </div>

            <div 
            // style={{
            //     maxHeight: 'calc(100vh - 500px)',
            //     overflowY: 'auto',
            //     border: "1px solid black",
            // }}
            //     className="m-0 p-0"
            className="m-0 p-0 table-main-div heughtset"
            >

                <Table bordered className='m-0 p-0'>

                    <thead className='bg-light'  style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>Rs. 100 NOS</th>
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>2.9x20</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>115</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>95</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>107</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x20</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>120</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>161</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>182</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>228</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>327</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>526</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.2x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>734</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>106</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>119</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x20</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>133</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>180</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>203</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>254</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>364</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>585</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3.5x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>816</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x20</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>197</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>227</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>277</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>296</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>389</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>579</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>922</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.2x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>894</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.8x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1712</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4.8x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2092</td>
                    </tr>

                   

                </Table>


            </div>
           
        </div>
  )
}

export default Drywellscrews