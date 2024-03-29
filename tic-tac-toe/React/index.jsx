const Header=()=>{
    return (
        <div className="h3 text-center pt-3"  style={{fontFamily:"'Source Code Pro', monospace"}}>
            Tic Tac Toe
        </div>
    )
}
const App=()=>{
    const [page,setPage] = React.useState(true) 
    const [friendPlay,setFriendPlay] = React.useState(true) 
    const [serverId, setServerId]=React.useState("")
    const [playerType, setPlayerType]=React.useState("")
    const [opponentType, setOpponentType]= React.useState("player1")
    const [msgCreated, setMsgCreated] = React.useState(true)
    const [mode, setMode] = React.useState({
        "easy":false,
        "hard":false,
        "medium":false
    })
    const [cpuMode,setCpuMode ]= React.useState(false)
    React.useEffect(()=>{
        if(playerType=='player1')
            setOpponentType("player2")
        else
            setOpponentType("player1")
    }, [playerType])

    return (
        <div>
            <Header/>
            {
                friendPlay
                ?
                (
                    page
                    ?
                    <Start
                        page={page} 
                        setPage={setPage} 
                        setMode={setMode} 
                        setCpuMode={setCpuMode} 
                        setFriendPlay={setFriendPlay}
                        serverId ={serverId}
                        setServerId={setServerId}
                        setPlayerType={setPlayerType}
                        setMsgCreated={setMsgCreated}
                    />
                    :
                    (
                        cpuMode
                        ?
                            <Page page={page} setPage={setPage} mode={mode} />
                        
                        :
                        
                            <PlayBack page={page} setPage={setPage} mode={mode}/>
                    )
                )
                :
                <Friend  
                    friendPlay={friendPlay} 
                    setFriendPlay={setFriendPlay}
                    serverId ={serverId}
                    setServerId={setServerId}
                    playerType={playerType}
                    opponentType= {opponentType}
                    msgCreated={msgCreated}
                    setMsgCreated={setMsgCreated}
                />
            }
            

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));