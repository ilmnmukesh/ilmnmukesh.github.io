
const Intro=()=>{
    React.useEffect(()=>{
        typing()
        setInterval(typing, 10000)   
    })
    function typing() {
        var str = $("#typing_data").html().trim()
        $("#typing").html("")
        var content = ""
        var isSpan = false
        for (let i = 0; i < str.length; i++) {

            if (str[i] == "<") {
                if (str[i + 1] == "/") {
                    isSpan = false
                    i++
                } else {
                    isSpan = true
                }
                i += 5
            }
            if (str[i] == ">") {
                continue
            }
            if (isSpan) {
                content += `<span>${str[i]}</span>`
            } else {
                content += `<p>${str[i]}</p>`
            }
        }

        $(content).hide().appendTo('#typing').each(function(i) {
            $(this).delay(100 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 100);
        });
    }
    return (        
        <div class="intro" id="home">       
            <div class="bg"></div>     
            <div class="intro-text">
                <p class="d-none" id="typing_data">
                    Hi! &mdash; My name is <span>Mukesh</span>, I'm a <span>MCA Student</span> in Anna University, Chennai
                </p>
                <div class="Hi">
                    <p id="typing">
                        Hi! &mdash; My name is <span>Mukesh</span>, I'm a <span>MCA Student</span> in Anna University, Chennai
                    </p>
                </div>
            </div>

        </div>
    )
}
