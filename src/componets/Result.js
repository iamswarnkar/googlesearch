import React from 'react'

export default function Result({searchData}) {
  

  return (
    <>
        <div className="result_show">
          <div className="count"><span>About {searchData.searchInfo.totalResults} results ({searchData.searchInfo.formattedSearchTime} seconds) </span></div>
        
          <div className='map'>
            {
              searchData.searchResults.map((element)=>{
                return <div className='show'>
                <span>{element.displayLink}</span>
                <a target="_blank" href={element.link}> {element.title}</a>
                <p>{element.snippet}</p>
              </div>
              })
            }
          </div>
        </div>
    </>
  )
}
