import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Layout } from 'antd';

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  return (
    <>
      <Layout
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <div className="flex justify-between mx-8 mb-4">
          <div>
            <div>Số ngày</div>
            <div>60</div>
          </div>
          <div>
            <div>Chọn dự án</div>
            <select name="" id="">
              <option value="">Tất cả dự án</option>
              <option value="">Dự án 1</option>
              <option value="">Dự án 2</option>
              <option value="">Dự án 3</option>
            </select>
          </div>
        </div>
        <div className=" h-56 mx-8 bg-blue-700"></div>
      </Layout>
      <Layout
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-3 ">
          <div className="w-2/3">
            <Pie data={data} />
          </div>
          <div className="w-2/3">
            <Pie data={data} />
          </div>
          <div className="w-2/3">
            <Pie data={data} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
