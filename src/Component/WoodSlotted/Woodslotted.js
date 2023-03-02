import React from 'react'
import Table from 'react-bootstrap/Table';


const Woodslotted = () => {
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
    <div style={{height:"30vh !important"}}>
        {/* <div class="video-container w-100"> */}
            <video muted autoPlay loop className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                <source src="/videodata/WoodSlotted.mp4" />
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


                <Table bordered className='m-0 p-0'>

                    <thead className='bg-light'  style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>Rs. 100 NOS</th>
                            
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x4</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>48</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>15x4</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>52</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x4</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>56</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x4</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>66</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>56</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>15x5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>58</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>68</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>75</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>15x6</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>63</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x6</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>71</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x6</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>92</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x6</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>111</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x7</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>93</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x7</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>114</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x7</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>130</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>35x7</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>143</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>102</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>120</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>144</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>35x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>163</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>40x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>184</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>45x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>198</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>216</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>60x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>369</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>75x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>584</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100x8</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>815</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>135</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>159</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>180</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>35x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>196</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>40x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>204</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>45x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>226</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>261</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>60x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>476</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>75x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>784</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100x9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>998</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>20x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>154</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>172</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>190</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>35x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>227</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>40x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>244</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>45x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>266</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>293</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>60x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>498</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>75x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>816</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100x10</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1067</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>25x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>206</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>30x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>252</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>35x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>278</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>40x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>279</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>45x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>293</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>356</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>60x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>554</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>75x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>883</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1349</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>125x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2027</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>150x12</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2750</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>60x14</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>825</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>75x14</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>984</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100x14</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1492</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>125x14</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2350</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>150x14</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2965</td>
                    </tr>

                </Table>


            </div>
   
</div>
  )
}

export default Woodslotted