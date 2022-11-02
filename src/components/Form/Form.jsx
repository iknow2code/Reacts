import React from 'react'
import './form.css'
//rfce
function form() {
    return (
        <div className="card">
            <div className="row">
                <form>

                    <label htmlFor="fyear" className="form-label"> Select Fiscal  year of the receipt.
                        <span className="label-nepali">* </span>
                    </label>
                    <div className="input-group required">
                        <select name="fyear" id="year">
                            <option value="79/80" selected>79/80</option>
                            <option value="78/79">78/79</option>
                        </select>

                    </div>{ /**/}


                    <label htmlFor="province" className="form-label"> Select Province.
                        <span className="label-nepali">  * </span>
                    </label>
                    <div className="input-group required">
                        <select name="province" id="year">
                            <option value="Province 1" selected>Province 1</option>
                            <option value="Bagmati">Bagmati</option>
                            <option value="Madhesh"> Madhesh</option>
                        </select>

                    </div>{ /**/}

                    <label htmlFor="district" className="form-label"> Select District.
                        <span className="label-nepali">  * </span>
                    </label>
                    <div className="input-group required">
                        <select name="district" id="year">
                            <option value="Kathmandu" selected>Kathmandu</option>
                            <option value="Sarlahi">Sarlahi</option>
                            <option value="Bhaktapur"> Bhaktapur</option>
                            <option value="Lalitpur">Lalitpur</option>
                        </select>

                    </div>{ /**/}

                    <label htmlFor="chitno" className="form-label"> Enter Chit No.
                        <span className="label-nepali"> * </span>
                    </label>
                    <div className="input-group required">
                        <input type="text" name="chitno" id="chitno"/>
                      

                    </div>{ /**/}


                    <div className="input-group">
                        <button className="btn btn-primary" type="submit" > Check</button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default form