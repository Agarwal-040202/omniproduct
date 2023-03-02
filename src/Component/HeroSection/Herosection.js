import React from 'react'
import Table from 'react-bootstrap/Table';
import "./herosection.css";

const Herosection = () => {
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
            <div className="" style={{height:"30vh !important"}}> 
                {/* <div className="video-container d-flex justify-content-center" > */}
                    <video muted autoPlay loop  className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                        <source src="/videodata/FullCut410.mp4" />
                    </video>
                    {/* <div className="controls">
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                    </div> */}
                {/* </div> */}

            </div>

            <div 
           
                className="m-0 p-0 table-main-div heughtset"
                // style={{height:"70vh !important"}}
                
            >

                <Table bordered className='m-0 p-0 ' >

                    <thead className='bg-light'  style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>Rs. 100 NOS</th>
                        </tr>

                    </thead>

                    <tr className='tabel-row'>
                        <td style={{ border: "1px solid black",textAlign:"center",fontWeight:"500"}}>5x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center",fontWeight:"500"}}>1420</td>

                        <td style={{ border: "1px solid black",textAlign:"center",fontWeight:"500",}}>103</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1220</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>116</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>140</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>97</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>110</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>122</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>166</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>188</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>258</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>800</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>192</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>600</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>235</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>254</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>183</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>222</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>256</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>284</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>304</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x40</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>318</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>390</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>520</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>802</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>339</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>389</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>523</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>922</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1529</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1868</td>
                    </tr>

                   

                </Table>


            </div>
           
        </div>
    )
}

export default Herosection