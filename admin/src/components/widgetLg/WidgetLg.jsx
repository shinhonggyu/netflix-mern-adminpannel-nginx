import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="http://iizinc01.cafe24.com/web/upload/NNEditor/20170605/%EC%B6%9C%EA%B7%BC%EA%B8%B8.%20%EC%82%AC%EB%82%98(%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4).%20W(MS-142SB)%20(2)_shop1_102836.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="http://iizinc01.cafe24.com/web/upload/NNEditor/20170605/%EC%B6%9C%EA%B7%BC%EA%B8%B8.%20%EC%82%AC%EB%82%98(%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4).%20W(MS-142SB)%20(2)_shop1_102836.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="http://iizinc01.cafe24.com/web/upload/NNEditor/20170605/%EC%B6%9C%EA%B7%BC%EA%B8%B8.%20%EC%82%AC%EB%82%98(%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4).%20W(MS-142SB)%20(2)_shop1_102836.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="http://iizinc01.cafe24.com/web/upload/NNEditor/20170605/%EC%B6%9C%EA%B7%BC%EA%B8%B8.%20%EC%82%AC%EB%82%98(%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4).%20W(MS-142SB)%20(2)_shop1_102836.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
