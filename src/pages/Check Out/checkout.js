import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './checkout.module.css';
import { useLocation } from 'react-router-dom';

function Checkout(){
  const location = useLocation();
  const airBNBCost = location.state.airBNBCost;

    return (
        <div>
            <div class="container">
                <div class="py-5 text-center">
                    <h1>Checkout</h1>
                </div>
              
                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-danger">Your cart</span>
                            <span class="badge bg-danger rounded-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Flight</h6>
                                    <small class="text-body-secondary">Brief description</small>
                                </div>
                                <span class="text-body-secondary">$12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">Air BnB</h6>
                                    <small class="text-body-secondary">Brief description</small>
                                 </div>
                                <span class="text-body-secondary">${airBNBCost}</span>
                            </li>
                            
                        
                        <li class="list-group-item d-flex justify-content-between">
                          <span>Total (USD)</span>
                          <strong>$20</strong>
                        </li>
                      </ul>
              
                      
                    </div>






                    <div class="col-md-7 col-lg-8">
                        
                    <hr class="my-4"/>

                    <h4 class="mb-3">Payment</h4>

                    <div class="my-3">
                        <div class="form-check">
                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                            <label class="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div class="form-check">
                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
                            <label class="form-check-label" for="debit">Debit card</label>
                        </div>
                    </div>

                    <div class="row gy-3">
                        <div class="col-md-6">
                        <label for="cc-name" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                        <small class="text-body-secondary">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                            Name on card is required
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label for="cc-number" class="form-label">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                        <div class="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label for="cc-expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                        <div class="invalid-feedback">
                            Expiration date required
                        </div>
                    </div>

                        <div class="col-md-3">
                        <label for="cc-cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                        <div class="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>

                        <hr class="my-4"/>

                        <button class="w-100 btn btn-danger btn-lg" type="submit">Pay</button>
                </div>

              </div>
              </div>
            </div>
        );
}

export default Checkout;