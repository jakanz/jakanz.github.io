import React from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import { Header, Footer } from "./global"

function Page() {
    return (
        <>
            <Header />
            <h2 style={{margin: 0}}>allow me to introduce myself.</h2>
            <p>You're likely unfamiliar with who I am or what I do, but I'll do my best to explain who I am and my hobbies throughout this reading. I'll try not to talk too extensively about what is likely uninteresting.<br /></p>
            <p>I'm <b>jakanz</b> <span className="inline-note">(she/her)</span>, an internet microcelebrity only capable of basic tasks. If you're a hardcore Primus or System of a Down fan, you may have been familiar with some concert footage archives I put on my youtube channel before it was suspended.</p>
            <p>If it isn't obvious enough already, I have a big relationship with internet archivism. I tend to archive old tapes of events like concerts or major tragedies, which includes 9/11. I've made my fair share of relatively important archives of this event, especially of those hard to find anywhere else. I'll most likely put these on archive.org from now on.</p>
            <p>Outside of internet archivism, I also enjoy speedrunning random games and achieve as many world records as possible. I can't embed them here, but you can view my times (recordings unfortunately gone) on my <a href="https://speedrun.com/user/jakanz">speedrun.com profile</a>.</p>
            <p>Speaking of gaming, I also enjoy casually playing Counter-Strike 2 and Minecraft, although I sometimes play other games like Tower Unite and Grand Theft Auto 5. However, when I'm not doing any of the above hobbies like gaming or archiving, I'm usually working on coding projects, such as the website you're on right now.</p>
            <p>If you're interested in my other projects, please visit my <a href="https://github.com/jakanz">GitHub page</a> or click its project link below:</p>
            <div className="projectlist container">
                <p>
                    <a href="https://github.com/jakanz/jakabot"><b>jakabot</b></a>, a discord bot that just does random shit <span className="inline-note">(still in early alpha development, don't expect this to be finished soon)</span><br />
                    <a href="https://github.com/jakanz/roblox-jumper"><b>roblox-jumper</b></a>, an AutoHotkey script to prevent idle kicks on Roblox <span className="inline-note">(no idea if this is ok to use though)</span><br />
                    <a href="https://github.com/jakanz/exponentiation-calc"><b>exponentiation-calc</b></a>, a calculator designed to find all exponents of a base number<br />
                    <a href="https://github.com/jakanz/Blinmaker-3000"><b>Blinmaker-3000</b></a>, a "<a href="https://youtube.com/@LifeOfBoris">Life of Boris</a>" inspired calculator recreated in C# <span className="inline-note">(view original <a href="https://youtube.com/watch?v=FMIZEfjYmtM">here</a>)</span>
                </p>
            </div>
            <p style={{fontSize:"3em", textAlign:"center"}}><a href="directory" target="_self">View website directory</a></p>
            <Footer />
        </>
    )
}

root.render(
    <Page />
)