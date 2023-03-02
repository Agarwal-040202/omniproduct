import React from 'react'
import Table from 'react-bootstrap/Table';

const Videotwoagain = () => {
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
                {/* <div class="video-container w-100"> */}
                    <video muted autoPlay loop className='w-100' style={{objectFit:"fill",height:"53vh"  ,position:"relative",zIndex:"-1",}}>
                        <source src="/videodata/PanSlotted.mp4" />
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
           
           className="m-0 p-0 table-main-div heughtset">

                <Table bordered className='m-0 p-0'>

                    <thead className='bg-light'  style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black",color:"maroon" }}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black", color:"maroon"}}>Rs. 100 NOS</th>
                            
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>54</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>60</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>3x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>64</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>44</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>46</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>53</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>56</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>63</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>72</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>84</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>4x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>99</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>62</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>67</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>73</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>5x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>92</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x6.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>52</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x6.9</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>1000</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>55</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>62</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>700</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>69</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>74</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>101</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>121</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>152</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>185</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>208</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>375</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>6x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>525</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>99</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>127</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x30</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>146</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>7x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>165</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x9.5</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>89</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>99</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>500</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>110</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>400</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>117</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>300</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>135</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>163</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>174</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>188</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>216</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>246</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>391</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>584</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>8x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>759</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>180</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>209</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>9x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>216</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x13</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>154</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x16</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>163</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>179</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>204</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>243</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x35</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>251</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>262</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x45</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>294</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>328</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>510</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>814</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1005</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1493</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>10x15</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1985</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x19</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>203</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x25</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>243</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x32</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>200</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>284</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x38</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>327</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x50</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>383</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x60</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>661</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>948</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1349</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1986</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>12x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2646</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x75</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>100</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1112</td>
                    </tr>

                    

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x100</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>1763</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x125</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>2736</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>14x150</td>
                        <td style={{ border: "1px solid black",textAlign:"center"}}>50</td>

                        <td style={{ border: "1px solid black",textAlign:"center"}}>3477</td>
                    </tr>

                   

                </Table>


            </div>
           
        </div>
  )
}

export default Videotwoagain