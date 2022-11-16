import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton'
import './styles.css'



function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="show992">#341</th>
                            <td className="show576">08/08/2022</td>
                            <td>Anakin</td>
                            <th className="show992">15</th>
                            <th className="show992">100</th>
                            <td>R$ 500.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <th className="show992">#342</th>
                            <td className="show576">10/10/2022</td>
                            <td>Goku</td>
                            <th className="show992">16</th>
                            <th className="show992">200</th>
                            <td>R$ 600.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>


                            </td>
                        </tr>
                        <tr>
                            <th className="show992">#343</th>
                            <td className="show576">12/12/2022</td>
                            <td>Saitama</td>
                            <th className="show992">16</th>
                            <th className="show992">300</th>
                            <td>R$ 550.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>


                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default SalesCard
