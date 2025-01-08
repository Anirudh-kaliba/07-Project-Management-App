import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(({ children, buttonCaption = 'Close' }, ref) => {
  const dialogRef = useRef(); // Correct use of useRef

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return createPortal(
    <dialog ref={dialogRef} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md '>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
