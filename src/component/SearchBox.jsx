import React, { useState } from 'react'

function SearchBox() {
 
 const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ab illo inventore veritatis et quasi architecto beatae vitae dicta explicabo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur magni dolores eos qui ratione voluptatem sequi neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex commodi consequatur quis autem vel eum iure reprehenderit qui in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta explicabo enim voluptatem quia voluptas sit aspernatur odit fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore";
 const [searchTerm, setSearchTerm] = useState('')
 function handleChange(e) {
    setSearchTerm(e.target.value)


 }



  return (
    <>
<div className=' border-2 border-fuchsia-800 h-12 w-152'>
      <form action="">
        <input onChange={handleChange} type="text" placeholder="Search..." style={{ width: "560px" , height: "42px" }}/>
       { searchTerm && text.includes(searchTerm) && <p>{text}</p> }
      </form>
  </div>
 
    </>
  )
}

export default SearchBox
