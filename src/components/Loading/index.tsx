import * as React from 'react'
import './style.css'
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className="loader-container ">
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  )
}
