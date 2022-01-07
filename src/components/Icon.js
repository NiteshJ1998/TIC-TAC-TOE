import React from "react";
import {FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'
import { Icons } from "react-toastify";

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle size="2em" classname = "icons"/>
        case 'cross':
            return <FaTimes size="2em" classname = "icons"/>
        default:
            return <FaPen  size="2em" classname = "icons"/>
    }
}

export default Icon;