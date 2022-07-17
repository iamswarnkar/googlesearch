import React from 'react'

export default function Result(sinfo) {
  console.log(sinfo)
  return (
    <>
        <div className="result_show">
          <div className="count"><span>About {78952400} results ({0.29} seconds) </span></div>
          <div className='map'>
            <div className='show'>
              <span>https://www.facebook.com</span>
              <a href='https://www.facebook.com'> Facebook - log in or sign up</a>
              <p>Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.</p>
            </div>
            <div className='show'>
              <span>https://www.facebook.com</span>
              <a href='https://www.facebook.com'> Facebook - log in or sign up</a>
              <p>Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.</p>
            </div>
            <div className='show'>
              <span>https://www.facebook.com</span>
              <a href='https://www.facebook.com'> Facebook - log in or sign up</a>
              <p>Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.</p>
            </div>
          </div>
        </div>
    </>
  )
}
