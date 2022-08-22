import React, { createContext, useState, useEffect } from 'react';

export type GlobalContent = {
  modal: Boolean,
  setModal: React.Dispatch<React.SetStateAction<Boolean>>,
}

export const ModalContext = createContext<GlobalContent>({
  modal: false,
  setModal: () => {}
});

export default function ModalContextProvider({ children } : { children: React.ReactNode }) {
  const [modal, setModal] = useState<Boolean>(false);
  
  return (
    <ModalContext.Provider value={{ modal, setModal}}>
      {children}
      {modal && <div className="absolute top-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white w-3/6 p-5 rounded-lg relative">
          <button className="bg-white absolute -top-3 -right-3 border p-2 rounded-full ">x</button>
          <p>aaaaaaaaaaaaa</p>
        </div>
      </div>}
    </ModalContext.Provider>
  );
}