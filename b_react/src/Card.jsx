function Card(props){
    const name2 = "Maaz Ahmad"
    return(
        <>
           <div className="bg-[url('background-pattern-desktop.png')]
            h-60"></div>
            <div className="ml-60 h-70 w-90 
            bg-green-100 -mt-30 relative z-1 -mb-40 rounded-2xl">
                <img src="src/icon-star.png" className="h-10 m-2" alt="maaz khan"/>
                <h2 className="font-bold text-2xl m-2">FAQs</h2>
                <p>what is frontened mentor and how it will help me</p>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Hobbies; {props.hobbies[0]}</p>
            </div>
            <div className="bg-purple-100 h-70 -z-1"></div>

        </>
    )
}
export default Card