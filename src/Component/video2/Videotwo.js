import React from 'react'
import Table from 'react-bootstrap/Table';

const Videotwo = () => {
    return (
        <div style={{
            // maxHeight: 'calc(100vh - 130px)',
            // overflowY: 'hidden',
            // overflowX:'hidden',
            height: "80vh",
            // overflow:"hidden",
            // borderTop: "1px solid black",
            marginBottom: "10px",
            marginTop: "10px"
        }}>
            <div className="">
                {/* <div class="video-container"> */}
                <video muted autoPlay loop className='w-100' style={{ objectFit: "fill", height: "53vh", position: "relative", zIndex: "-1", }}   >
                    <source src="/videodata/CskSlotted.mp4" />
                </video>
                {/* <div className="controls">
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                        <span className="control-btn" data-src=""></span>
                    </div> */}
                {/* </div> */}

            </div>

            {/* <div style={{
                maxHeight: 'calc(100vh - 527px)',
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

                    <thead className='bg-light' style={{ position: "sticky", top: "-2px", background: "white", zIndex: "5", height: "40px", }}>

                        <tr >
                            <th className="text-center " style={{ border: "1px solid black", color: "maroon" }}>SIZE</th>
                            <th className="text-center " style={{ border: "1px solid black", color: "maroon" }}>PACKING</th>
                            <th className="text-center " style={{ border: "1px solid black", color: "maroon" }}>Rs. 100 NOS</th>
                        </tr>

                    </thead>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>3x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>43</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>3x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>46</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>3x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>51</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>3x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>54</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x6.5</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>40</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x9.5</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>43</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>45</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>49</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>53</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>700</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>61</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>400</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>73</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>4x38</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>400</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>88</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>5x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>52</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>5x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>56</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>5x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>700</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>61</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>5x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>78</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x6.5</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>45</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x6.9</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>1000</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>48</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>700</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>52</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>700</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>59</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>62</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>400</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>83</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>300</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>104</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x38</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>128</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x45</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>158</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x50</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>180</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x60</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>334</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>6x75</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>465</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>7x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>86</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>7x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>400</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>109</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>7x30</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>300</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>125</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>7x35</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>140</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x9.5</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>79</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>84</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>500</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>93</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>400</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>300</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>113</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>137</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x35</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>148</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x38</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>159</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x45</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>185</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x50</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>209</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x60</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>332</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x75</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>496</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>8x100</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>656</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>9x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>154</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>9x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>177</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>9x35</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>184</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x13</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>132</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x16</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>142</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>152</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>173</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>206</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x35</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>214</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x38</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>224</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x45</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>250</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x50</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>279</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x60</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>433</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x75</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>692</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x100</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>855</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x125</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1276</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>10x150</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1697</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x19</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>173</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x25</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>206</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x32</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>200</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>242</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x38</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>278</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x50</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>326</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x60</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>563</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x75</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>806</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x100</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1148</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x125</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1720</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>12x150</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>2292</td>
                    </tr>


                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>14x75</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>100</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1011</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>14x100</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>1524</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>14x125</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>2400</td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>14x150</td>
                        <td style={{ border: "1px solid black", textAlign: "center" }}>50</td>

                        <td style={{ border: "1px solid black", textAlign: "center" }}>3041</td>
                    </tr>



                </Table>


            </div>

        </div>
    )
}

export default Videotwo