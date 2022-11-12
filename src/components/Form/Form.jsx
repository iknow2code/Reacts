import React from 'react'
import './form.css';
import side_pic from "./../../assets/images/clip-971.png";
//rfce
function form() {
    return (
        <div className="container">
            <div className="card">
                <div className="form-card">
                    <form>
                        <div className="form-group">
                            <label htmlFor="fiscal_year" className="form-label"> Select Fiscal  year of the receipt.
                                <span className="label-nepali">* </span>
                            </label>
                            <div className="input-group">
                                <select name="fiscal_year" id="fiscal_year">
                                    <option disabled selected>-Select-</option>
                                    <option value="7980">79/80</option>
                                    <option value="7879">78/79</option>
                                    <option value="7778">77/78</option>
                                </select>

                            </div>{ /**/}


                            <label htmlFor="province_code" className="form-label"> Select Province.
                                <span className="label-nepali">  * </span>
                            </label>
                            <div className="input-group">
                                <select name="province_code" id="province_code"> 
                                    <option  disabled selected>-Select-</option>
                                    <option value="000" label="Kathmandu Valley">Kathmandu Valley</option>
                                    <option value="001" label="Province 1">Province 1</option>
                                    <option value="002" label="Madhesh Province">Madhesh Province</option>
                                    <option value="003" label="Bagmati Province">Bagmati Province</option>
                                    <option value="004" label="Gandaki Province">Gandaki Province</option>
                                    <option value="005" label="Lumbini Province">Lumbini Province</option>
                                    <option value="006" label="Karnali Province">Karnali Province</option>
                                    <option value="007" label="Sudurpaschim Province">Sudurpaschim Province</option>

                                </select>

                            </div>{ /**/}

                            <label htmlFor="district_code" className="form-label"> Select District.
                                <span className="label-nepali">  * </span>
                            </label>
                            <div className="input-group">
                                <select name="district_code" id="district_code">
                                <option  disabled selected>-Select-</option>
                                    <option value="000" selected>Kathmandu</option>
                                    <option value="000"> Bhaktapur</option>
                                    <option value="000">Lalitpur</option>
                                </select>

                            </div>{ /**/}

                            <label htmlFor="chitno" className="form-label"> Enter Chit No.
                                <span className="label-nepali"> * </span>
                            </label>
                            <div className="input-group">
                              <input type="text" id="chitno" className="input-group" placeholder="Enter the Chit No." required/>
                            </div>{ /**/}


                            <div className="input-group">
                                <button className="btn" type="submit" > Check</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="note">
               <img src={side_pic} alt="" srcset="" />
                </div>
            </div>
        </div>

    )
}

export default form