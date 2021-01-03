import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Payments Payments</h1>
          <p>Payments Payments Payments, Payments Payments Payments, Payments Payments PaymentsPayments Payments PaymentsPayments Payments, PaymentsPayments Payments PaymentsPayments Payments Payments</p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
