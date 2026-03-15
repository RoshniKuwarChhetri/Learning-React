import React from 'react'

export const PropsDrilling = (props) => {
  return (
    <div>
      <div className="drill">
        <img src={props.img} alt="" />
        <h3>{props.country},{props.year}</h3>
        <h3>{props.city}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aspernatur quod quae molestiae deleniti distinctio, error rem sed mollitia! Architecto illo nemo debitis laudantium harum dolorem aliquid delectus, quaerat unde?</p>
      </div>
    </div>
  )
}

export default PropsDrilling
