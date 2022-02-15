import React from 'react'
import { useParams } from 'react-router-dom'
import {useState} from "react";
import {If,Then,Else} from 'react-if';

const TourDetails = ({ data }) => {
  const { id } = useParams();

  return (
      <div className="full-detail">
        <div className="explore-container">
          {
            data
              .filter((list) => list.id === id)
              .map((list) => (
                <div className="full-card" key={ list.id }>
                  <h2>Name: {list.name}</h2>
                  <h4>Price: {list.price}</h4>
                  <img src={list.image}  width="500" height="600"></img>
                  <h4>Description: {list.info}</h4>
                </div>
              ))}
        </div>
      </div>
  )
}

export default TourDetails
