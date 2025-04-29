import React from "react"

function Header() {
    return (
        <>
            <h1 className="header">
                <div className="header-title">
                    <img src="../dl/pics/sona.png" style={{height:"43px", marginRight:"8px", verticalAlign:"bottom"}} alt="The jakanz persona" />
                    jakanz
                </div>
                <div id="navigation">
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="https://jakanz.github.io">Home</a></li>
                            <li className="nav-item"><a href="https://jakanz.github.io/directory">Directory</a></li>
                            <li className="nav-item"><a href="https://jakanz.github.io/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </h1>
            <hr style={{marginBottom: "12px"}} />
        </>
    )
}

function Footer() {
    return (
        <>
            <div style={{textAlign:"center"}}>
                <hr />
                <p>Website developed by jakanz, no rights reserved -- <a href="https://github.com/jakanz/jakanz.github.io">Source code</a></p>
            </div>
        </>
    )
}

export { Header, Footer }