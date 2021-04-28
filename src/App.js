import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
    {
        title:'What is React?',
        content:'React is a front end JavaScript framework'
    },
    {
        title:"Why use React?",
        content:"React is an epic js library"
    },
    {
        title:"Why is it epic?",
        content:"Components and dat"
    }
]

export default()=>{
    return (
    <div>
        {/* <Accordion items={items}></Accordion> */}
        <Search></Search>
    </div>
    )
}