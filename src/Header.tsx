const Header = (isMobile: any) => {

    return (
    <div>
        <h1>Mary Ferrer</h1>
        
            {isMobile ? <div><span></span><span></span><span></span></div> : 
            <ul>
                <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            </ul> }
    </div>
    )
}

export default Header;