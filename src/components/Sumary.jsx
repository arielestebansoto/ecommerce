import React from 'react'

const Sumary = () => (
    <div className="row z-depth-2">
        <div className="col s12">
            <h4>Sumary</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Product Name</td>
                        <td>$ 999.999</td>
                    </tr>
                    <tr>
                        <td>Product Name</td>
                        <td>$ 999.999</td>
                    </tr>
                    <tr>
                        <td>Product Name</td>
                        <td>$ 999.999</td>
                    </tr>

                </tbody>
            </table>
            <div className="divider"></div>
            <table className="Final">
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>$ 999.999</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>$ 999.999</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$ 999.999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Sumary