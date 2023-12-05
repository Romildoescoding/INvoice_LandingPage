import React from 'react';
import './TaxInvoice.css';
function TaxInvoice() {
  return (
    <div className="invoice-div">
      <h4 className="center-heading">Tax Invoice</h4>
      <table className="first-table">
        <tbody>
          <tr>
            <td>
              <p>
                <h2 className="head-1">INvoice Enterprises</h2>
                Near Upes, Bidholi, UK - 248007<br />
                <b>GST-IN: 01BDFDFEFZZXRB</b><br />
                Phone: 8001080010 e-Mail: invoice.enterprises@yahoo.com
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <table className="in-table">
        <tbody>
          <tr>
            <th>INvoice Id</th>
            <th>INvoice Dated</th>
            <th>Reference Id <small>[if any]</small></th>
          </tr>
          <tr>
            <td>2023/SB/01</td>
            <td>27/07/2023</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table className="ref-table">
        <tbody>
          <tr>
            <th>Buyer <small>(bill to)</small></th>
            <th>Consignee <small>(ship to)</small></th>
          </tr>
          <tr>
            <td className="form-name">RAJ</td>
            <td>Romil</td>
          </tr>
          <tr>
            <td>Bidholi, Dehradun</td>
            <td>Kaithal, Haryana</td>
          </tr>
          <tr>
            <td>GST-IN: 01CDZZWJWJ</td>
            <td>GST-IN: 01CDZZWJWJ</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>HSN</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>GST</th>
            <th>Taxable Amount</th>
            <th>GST Amount</th>
            <th>SubTotal</th>
          </tr>
          <tr>
            <td>Smart LED Bulb</td>
            <td>4285</td>
            <td>22</td>
            <td>250</td>
            <td>12%</td>
            <td>4910.71</td>
            <td>589.29</td>
            <td>5500</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table>
        <tbody>
          <tr>
            <th>Total Taxable Amount</th>
            <th>Total GST Amount</th>
            <th>Rounded Off</th>
            <th>Grand Total</th>
          </tr>
          <tr className="total-row">
            <td>8258.92</td>
            <td>991.08</td>
            <td>0.0</td>
            <td>INR 9250.0</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table>
        <tbody>
          <tr>
            <th>Mode of Delivery</th>
            <td>MANUAL DELIVERY</td>
          </tr>
        </tbody>
      </table>

      <div className="terms-block">
        <p className="terms-description">
          Note:<br />
          - Points are rounded off.<br />
          - Subject to "UK" jurisdiction only.<br />
          - Terms and Conditions Apply.
        </p>
      </div>

      <div className="signature-block">
        <p className="signature-title">For INvoice Enterprises</p>
        <p className="signature-name"><small>Authorised Signatory</small></p>
      </div>
    </div>
  );
}

export default TaxInvoice;
