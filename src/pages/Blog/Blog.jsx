import React from 'react';
import Pdf from "react-to-pdf";
import Header from '../Shared/Header/Header';


const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div >
                <Pdf targetRef={ref} filename='code-example.pdf'>
                    {({ toPdf }) => (
                        <button className="btn btn-wide md:ms-36 mt-3" onClick={toPdf}>Click to Download</button>
                    )}
                </Pdf>
                <div ref={ref} className=' bg-slate-50 mt-14 md:mt-24 p-4 md:p-10 md:mx-36 md:mb-24 '>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'>Differences between uncontrolled and controlled components. ?</h3>
                        <p className='text-gray-600'>Controlled components manage form element state using React s component state, while uncontrolled components rely on the DOM for state management. Controlled components have one-way data flow, with changes triggering events and updating the parent component s state. Uncontrolled components have two-way data flow, allowing direct changes to the form element. The choice depends on specific needs: controlled components offer control and predictability, while uncontrolled components provide flexibility and simplicity.</p>
                    </div>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'>How to validate React props using PropTypes ?</h3>
                        <ul className='text-gray-600'>
                            <li>
                                <span className='font-bold'>PropTypes.any :</span> The prop can be of any data type.
                            </li>
                            <li>
                                <span className='font-bold'>PropTypes.bool :</span> The prop should be a Boolean.
                            </li>
                            <li>
                                <span className='font-bold'>  PropTypes.number :</span> The prop should be a number.
                            </li>
                            <li>
                                <span className='font-bold'> PropTypes.string :</span> The prop should be a string.
                            </li>
                        </ul>
                    </div>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'> What  difference between node js and express js ?</h3>
                        <p className='text-gray-600'><span className='font-bold'>Node.js:</span> <br />
                            Node.js is a runtime environment that allows you to execute JavaScript code outside of the browser. It is built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model. Node.js enables server-side development by providing a runtime environment that allows you to build scalable and high-performance applications using JavaScript. <br />

                            <span className='font-bold'>Express.js:</span> <br />

                            Express.js is a web application framework built on top of Node.js. It provides a set of features and tools that simplify the process of building web applications and APIs. Express.js is lightweight and unopinionated, which means it gives you the flexibility to structure and design your application as you see fit. It provides routing capabilities, middleware support, and integrates well with various templating engines and databases.
                        </p>
                    </div>
                    <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
                        <h3 className='text-2xl mb-4 font-bold'> What  difference between node js and express js ?</h3>
                        <p className='text-gray-600'>Custom hooks are created to achieve several purposes. Firstly, they enhance reusability by extracting logic that can be shared across multiple components, preventing code duplication. By creating custom hooks, you can abstract away intricate implementation details, making the codebase easier to understand and maintain.

                            Custom hooks are particularly useful for handling stateful logic. They enable you to share state management between components without relying on class components or prop drilling. You can leverage built-in hooks such as useState, useEffect, useContext, or create your own custom hooks to encapsulate specific functionality.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;