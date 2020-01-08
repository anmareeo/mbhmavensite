import React from "react"
export default function Offer(){

    let myOfferings = [
        "Free consultation.",
        "Availability through Skype or other video technologies.",
        "A variety of service packages to meet your needs.",
        "Certified organizing expertise.",
        "Zero judgment.",
        "30-day Money Back Guarantee."
    ]

    let [offerings,setOfferings]=React.useState(myOfferings)






    return(
        <div id="rightsidebar" className="sidebar">
        <h3>What I Offer?</h3>
        <ul>
            {
                offerings.map(value =>{
                    return (
                        <li>{value}</li>
                    )

                })



            }
            
        </ul>
        <div className="clear"></div>
        <footer className="footer">
            <div>
                <p>Mess Be Haven Maven. Copyright &copy; 2019-2020</p>
                <div id="credit">
                    <h6>I created my free logos at LogoMakr.com. Click the button to use this service.</h6>
                    <button><a href="https://logomakr.com/">LogoMakr</a></button>
                </div>
            </div>
        </footer>
        </div>



    )
}