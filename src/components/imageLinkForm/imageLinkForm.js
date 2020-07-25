import React from 'react';
import './imageLinkForm.css';

const imageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This will detect faces in pictures. Type in the picture URL.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Inspect Pic</button>
        </div>
      </div>
    </div>
  );
}

export default imageLinkForm;