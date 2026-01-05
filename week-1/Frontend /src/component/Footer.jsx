import React from "react";

function Footer(){
    return(

        <div className="flex-auto bg-red-700">
            <h1>this is just footer nothing more (plz connect me on linkden )</h1>
            <p>i wanted to add isactive so all the accounts like change to yellow but well i looks like it wont be possible </p>
            <div className="flex-auto ">
                <li className="flex gap-6">  
                    <a href="https://github.com/justwasif">
                     github
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-wasif-ansari-1b439538b/" className="">
                        linkden
                    </a>
                    <a href="https://x.com/slaysid6">
                        X
                    </a>
                    <a href="https://www.instagram.com/slaysid6/">
                        inst
                    </a>
                </li>
                
                
            </div>
        </div>
    )

}

export default Footer