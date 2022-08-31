//https://www.youtube.com/watch?v=Id7GbGUOlFs
//npm i react-loader-spinner
//https://mhnpd.github.io/react-loader-spinner/docs/components/infinity-spin
import React from 'react';
import { InfinitySpin } from  'react-loader-spinner'

export default function Spinner(){

  return(
    <InfinitySpin 
      width='150'
      color="#Ffffff"
    />
  )
}