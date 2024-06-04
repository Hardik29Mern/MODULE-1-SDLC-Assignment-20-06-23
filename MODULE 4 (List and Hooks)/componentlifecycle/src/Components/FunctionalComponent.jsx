import React, {useState, useEffect} from 'react'

const FunctionalComponent = () => {
    const [name, setName] = useState("Test1")
    useEffect(() => {
        setTimeout(() => {
            setName("Testing")
        }, 3000)
        console.log('UseEffect Called...');
    })
    return (
        <div>
            <h3>Component LifeCycle : Functional Component</h3>
            <h4>Name is : {name}</h4>
        </div>
    )
}

export default FunctionalComponent