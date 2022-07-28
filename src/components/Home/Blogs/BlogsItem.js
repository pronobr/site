import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import './Blogs.css'
const Blogs = () => {
    const [user, loading, error] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
      };
    return (
       <div className="container-box mt-5">

        <div className="d-none px-4 res-section  justify-content-between align-items-center">
            <div className="">
            <h5 className='category-item-responsive'>All Posts(368)</h5>
            </div>
            <div className="">
                <button className='btn mb-1 res-btn' type='btn'>
                <span className='me-3 filter-text'>Filter: All</span>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.833252 0.333374L4.99992 4.50004L9.16659 0.333374H0.833252Z" fill="#212529"/>
</svg>

                </button>
            </div>
        </div>

        <div className="row all-category d-flex  align-items-center ">
        <div className="col-md-8">
        <div className=" d-flex gap-4">
            <h5 className='category-item-active'>All Posts(32)</h5>
            <h5 className='category-item'>Article</h5>
            <h5 className='category-item'>Event</h5>
            <h5 className='category-item'>Education</h5>
            <h5 className='category-item'>Job</h5>
        </div>
        </div>
        <div className="col-md-4 ">
        <button type="button" class="btn btn-post me-3 btn-lg">
        
 

            <span className='fw-bold'>Write a Post</span>
            <svg className='ms-3' width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z" fill="black"/>
</svg>
            </button>
      {
        user ?
        <button type="button" class="btn  leave-btn">
        <svg className='me-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z" fill="#6A6A6B"/>
</svg>


Leave Group
            </button>
        :
        <button type="button" class="btn btn-group btn-lg">
        <svg className='me-3' width="25" height="25" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white"/>
</svg>

            Join Group
            </button>
      }
        </div>
        </div>
        <hr></hr>
       </div>
    );
};

export default Blogs;