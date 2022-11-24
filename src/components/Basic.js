import React from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'

const Basic = () => {

  const notify = () => {
    //toast("Notificación básica")

    //Posicionamiento y tipos de mensajes
    //toast.success("Success notification", {position: toast.POSITION.TOP_CENTER})
    //toast.error("Error notification", {position: toast.POSITION.TOP_LEFT})
    //toast.warning("Warning notification", {position: toast.POSITION.BOTTOM_LEFT})
    //toast.info("Info notification", {position: toast.POSITION.BOTTOM_RIGHT})

    //custom
    toast("Custom Style", {
        position:toast.POSITION.TOP_CENTER,
        className:'foo-bar',
        theme:'light',
        transition:Zoom
    })
    //toast.success("icono")
  }

  const closeAfter = () => {
    toast("Info", {autoClose: 1000})
  }
  return (
    <>
        <button
            onClick={notify}
            className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
        >
            Toastify
        </button>

        <ToastContainer />
    </>
  )
}

export default Basic