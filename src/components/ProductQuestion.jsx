import React from 'react'
import ProductAskResponse from './ProductAskResponse'

import '../assets/styles/components/ProductQuestion.scss'

const ProductQuestion = () => (
    <div className="row">
        <div className="col s12">
            <div className="ProductQuestion z-depth-2">
                <h4 className="ProductQuestion_title">Questions and answers</h4>
                <h6>Ask the vendor</h6>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="question" className="materialize-textarea"></textarea>
                                <label htmlFor="question">Question</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <h5 className="ProductQuestion_lastAsked">Last asked</h5>
                    <ProductAskResponse />
                    <ProductAskResponse />
                    <ProductAskResponse />
                    <ProductAskResponse />
                </div>
            </div>
        </div>
    </div>
)

export default ProductQuestion